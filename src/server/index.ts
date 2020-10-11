import debug from 'debug';
import express from 'express';
import next from 'next';

import pageRoutes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handler = pageRoutes.getRequestHandler(app);

const log = debug('Luna:Express');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use((req, _, next) => {
      next();
    });
    server.use(handler);

    server.listen(port, () => {
      log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
