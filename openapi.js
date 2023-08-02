const openapi = require('express-openapi');
const apiDoc = require('./api-doc');

module.exports = app =>
  openapi.initialize({
    apiDoc,
    app,
    paths: './api-routes/',
    pathsIgnore: /.(spec|test)$/,
  });
