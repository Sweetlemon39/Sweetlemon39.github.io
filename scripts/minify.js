'use strict';

const { minify: minifyHtml } = require('html-minifier-terser');
const { minify: minifyJs } = require('terser');
const CleanCSS = require('clean-css');

if (hexo.config.all_minifier && process.env.NODE_ENV !== 'development') {
  hexo.extend.filter.register('after_render:html', html => minifyHtml(html, {
    collapseWhitespace: true,
    removeComments: true,
    ignoreCustomComments: [/^\s*more/],
    minifyJS: true,
    minifyCSS: true
  }), 20);
  hexo.extend.filter.register('after_render:css', css => {
    const result = new CleanCSS().minify(css);
    if (result.errors.length) throw new Error(result.errors.join('\n'));
    return result.styles;
  });
  hexo.extend.filter.register('after_render:js', async js => (await minifyJs(js)).code);
}
