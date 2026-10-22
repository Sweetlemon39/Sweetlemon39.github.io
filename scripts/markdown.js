'use strict';

const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');
const uslug = require('uslug');

// Use public Markdown-it APIs: older Hexo renderers import removed private modules.
function render(data, options = {}) {
  const config = this.config.markdown;
  const parser = new MarkdownIt(config.preset, config.render);
  for (const plugin of config.plugins) {
    const name = typeof plugin === 'string' ? plugin : plugin.name;
    const implementation = require(name);
    parser.use(name === 'markdown-it-emoji' ? implementation.full : implementation, typeof plugin === 'string' ? {} : plugin.options);
  }
  parser.use(anchor, { level: 1, slugify: uslug });
  return options.inline ? parser.renderInline(data.text) : parser.render(data.text);
}

for (const extension of ['md', 'markdown', 'mkd', 'mkdn', 'mdwn', 'mdtxt', 'mdtext']) {
  hexo.extend.renderer.register(extension, 'html', render, true);
}
