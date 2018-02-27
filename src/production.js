const log = require('./util/logging')('production');
const isDev = require('./util/isDev');
const serveStatic = require('serve-static');
const path = require('path');

const configureProduction = app => {
  const isProd = !isDev();
  if (isProd) {
    log.debug('Configuring production settings');

    app.get('webpack').run((error, stats) => {
      if (error) {
        log.error(error);
      }
      if (stats) {
        const time = stats.endTime - stats.startTime;
        log.info(`Webpack build complete in ${time}ms. Hash ${stats.hash}`);
      }
    });
    const staticSettings = {
      dotfiles: 'ignore',
      index: false
    };
    app.use('/assets', serveStatic(path.resolve('./dist'), staticSettings));
  }
};

module.exports = { configureProduction };
