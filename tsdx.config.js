const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      ...config.plugins,
      peerDepsExternal(),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      }),
    ];
    return config;
  },
};
