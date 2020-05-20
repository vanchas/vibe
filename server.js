/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');

const nextI18next = require('./app/i18n');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  const port = process.env.PORT || 3000;

  await server.listen(port);
  console.log(`> Ready on PORT:${port}`);
})();