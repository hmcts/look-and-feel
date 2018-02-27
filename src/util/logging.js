const colors = require('colors/safe');
const debug = require('debug');

// eslint-disable-next-line no-console
const log = (prefix, ...args) => console.log(prefix, ':', ...args);
const app = 'look-and-feel';

module.exports = prefix => {
  const scope = `${app}.${prefix}`;
  try {
    // eslint-disable-next-line global-require
    const logger = require('@hmcts/nodejs-logging').getLogger(scope);

    debug(`${app}.logging`)('Using @hmcts/nodejs-logging for logging');
    return {
      info(...args) {
        return logger.info(...args);
      },
      warn(...args) {
        return logger.warn(...args);
      },
      error(...args) {
        return logger.error(...args);
      },
      debug: debug(scope)
    };
  } catch (moduleMissing) {
    debug(`${app}.logging`)('@hmcts/nodejs-loging not found');
    debug(`${app}.logging`)('Using console.log for logging');
    return {
      info(...args) {
        return log(colors.green(scope), ...args);
      },
      warn(...args) {
        return log(colors.yellow(scope), ...args);
      },
      error(...args) {
        return log(colors.red(scope), ...args);
      },
      debug: debug(scope)
    };
  }
};
