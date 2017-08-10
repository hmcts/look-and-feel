/* eslint-disable no-process-env */
const isDev = () => process.env.NODE_ENV === 'development';

module.exports = isDev;
