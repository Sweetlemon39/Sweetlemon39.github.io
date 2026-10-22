'use strict';
const { spawnSync } = require('node:child_process');
const result = spawnSync(process.execPath, [require.resolve('hexo/bin/hexo'), 'generate'], {
  encoding: 'utf8', maxBuffer: 32 * 1024 * 1024,
  env: { ...process.env, NO_COLOR: '1' }
});
process.stdout.write(result.stdout || '');
process.stderr.write(result.stderr || '');
if (result.error) throw result.error;
// Hexo can exit successfully after a plugin fails to load.
process.exit(result.status === 0 && !/^(?:ERROR|FATAL)\b/m.test(result.stdout + result.stderr) ? 0 : 1);
