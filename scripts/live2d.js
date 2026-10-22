'use strict';

const fs = require('node:fs');
const path = require('node:path');

hexo.extend.generator.register('live2d', function () {
  const config = this.config.live2d;
  if (!config || !config.enable) return [];
  const prefix = config.pluginRootPath;
  const modelDir = path.join(this.base_dir, 'live2d_models', config.model.use);
  const runtimeDir = path.join(this.base_dir, 'vendor/live2d-widget');
  const routes = [];
  function addFiles(directory, destination) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      const target = path.posix.join(destination, entry.name);
      if (entry.isDirectory()) addFiles(file, target);
      else if (entry.isFile()) routes.push({ path: target, data: () => fs.createReadStream(file) });
    }
  }
  addFiles(modelDir, prefix + config.pluginModelPath);
  addFiles(runtimeDir, prefix + config.pluginJsPath);
  return routes;
});

hexo.extend.filter.register('after_render:html', function (html) {
  const config = this.config.live2d;
  if (!config || !config.enable) return html;
  const root = this.config.root;
  const prefix = root + config.pluginRootPath;
  const modelDir = path.join(this.base_dir, 'live2d_models', config.model.use);
  const model = fs.readdirSync(modelDir).find(file => file.endsWith('.model.json'));
  if (!model) throw new Error('Live2D model JSON not found');
  const options = {
    ...config,
    model: { ...config.model, jsonPath: prefix + config.pluginModelPath + model }
  };
  delete options.model.use;
  const json = JSON.stringify(options).replace(/</g, '\\u003c');
  return html.replace(/<\/body>/i, `<script src="${prefix + config.pluginJsPath}L2Dwidget.min.js"></script><script>L2Dwidget.init(${json});</script></body>`);
});
