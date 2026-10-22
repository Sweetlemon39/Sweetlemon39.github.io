'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const Hexo = require('hexo');
const read = file => fs.readFileSync(path.join('public', file), 'utf8');

test('Markdown extensions, heading links and unsafe URL handling', async () => {
  const hexo = new Hexo(process.cwd(), { silent: true });
  await hexo.init();
  try {
    const html = hexo.render.renderSync({ text: '# 标题\n\n# 标题\n\n$x^2$\n\nText[^1] :smile: H~2~O x^2^ ++inserted++\n\n[^1]: footnote\n\n[bad](javascript:alert(1))\n\n```js\nconst a = "<script>";\n```', engine: 'md' });
    assert.match(html, /id="标题"/);
    assert.match(html, /id="标题-\d+"/);
    assert.match(html, /class="katex"/);
    assert.match(html, /footnote/);
    assert.match(html, /😄/u);
    assert.match(html, /H<sub>2<\/sub>O/);
    assert.match(html, /<sup>2<\/sup>/);
    assert.match(html, /<ins>inserted<\/ins>/);
    assert.doesNotMatch(html, /href="javascript:/);
    assert.match(html, /&lt;script&gt;/);
  } finally {
    await hexo.exit();
  }
});

test('generated site includes articles, search, styles, offline cache and Live2D', () => {
  for (const file of ['index.html', 'archives/index.html', 'kmp/index.html', 'content.json', 'search.xml', 'random.html', 'css/style.css', 'service-worker.js']) {
    assert.ok(read(file).length > 0, file);
  }
  const index = JSON.parse(read('content.json'));
  assert.ok(index.posts.length >= 33);
  const html = read('kmp/index.html');
  assert.match(html, /class="katex"/);
  assert.match(html, /class="highlight/);
  assert.match(html, /L2Dwidget.init/);
  assert.match(html, /jquery@3\.7\.1/);
  assert.doesNotMatch(html, /katex@0\.11|jquery@3\.4/);
  const model = JSON.parse(read('live2dw/assets/kutori.model.json'));
  const files = [model.model, ...model.textures, model.physics];
  for (const motions of Object.values(model.motions || {})) {
    for (const motion of motions) files.push(motion.file, motion.sound);
  }
  for (const expression of model.expressions || []) files.push(expression.file);
  for (const file of files.filter(Boolean)) {
    assert.ok(fs.existsSync(path.join('public/live2dw/assets', file)), file);
  }
  for (const file of ['L2Dwidget.min.js', 'L2Dwidget.0.min.js']) {
    assert.deepEqual(fs.readFileSync('public/live2dw/lib/' + file), fs.readFileSync('vendor/live2d-widget/' + file));
  }
});

test('KaTeX browser assets match installed version and integrity hashes', () => {
  const html = read('index.html');
  const version = require('katex/package.json').version;
  const assets = [...html.matchAll(/https:\/\/cdn\.jsdelivr\.net\/npm\/katex@([^/]+)\/([^" ]+)" integrity="sha384-([^"]+)"/g)];
  assert.equal(assets.length, 3);
  for (const [, actualVersion, file, hash] of assets) {
    assert.equal(actualVersion, version);
    assert.equal(hash, crypto.createHash('sha384').update(fs.readFileSync('node_modules/katex/' + file)).digest('base64'));
  }
});

test('encrypted article decrypts, rejects wrong passwords and does not leak into indexes', () => {
  const html = read('hello-world/index.html');
  const attribute = name => html.match(new RegExp(`${name}="([^"]+)"`))[1];
  const salt = Buffer.from(attribute('data-salt'), 'hex');
  const nonce = Buffer.from(attribute('data-nonce'), 'hex');
  const iterations = Number(attribute('data-kdf-iterations'));
  assert.equal(iterations, 600000);
  const ciphertext = Buffer.from(html.match(/<script id="hbeData"[^>]*>([a-f0-9]+)<\/script>/)[1], 'hex');
  const password = fs.readFileSync('source/_posts/hello-world.md', 'utf8').match(/^password: (.+)$/m)[1];
  const decrypt = password => {
    const key = crypto.pbkdf2Sync(password, salt, iterations, 32, 'sha256');
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, nonce);
    decipher.setAuthTag(ciphertext.subarray(-16));
    return Buffer.concat([decipher.update(ciphertext.subarray(0, -16)), decipher.final()]).toString();
  };
  assert.match(decrypt(password), /very first post/);
  assert.throws(() => decrypt('incorrect-password'));
  for (const file of ['hello-world/index.html', 'index.html', 'content.json', 'search.xml']) {
    assert.doesNotMatch(read(file), /very first post/);
  }
});
