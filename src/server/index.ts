import { Config } from '@payloads/common/Next';
import debug from 'debug';
import express from 'express';
import next from 'next';

import pageRoutes from './routes';
import serverRoutes from './serverRoutes';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handler = pageRoutes.getRequestHandler(app);

const log = debug('Luna:Express');

const config: Config = {};

app
  .prepare()
  .then(() => {
    const server = express();

    /** post body 를 받기 위해서는 필수 */
    server.use(express.json());

    serverRoutes.forEach((route) => {
      server.use(new route(config).export());
    });

    pageRoutes['routes'].forEach(({ pattern, page }) => {
      server.get(pattern, (req, res) => {
        app.render(
          // @ts-expect-error
          {
            ...req,
            ...config,
          },
          res,
          page,
          {
            ...req.query,
            ...req.params,
          }
        );
      });
    });

    server.use(handler);

    server.route('*').get((req, res) => handler(req, res));

    server.listen(port, () => {
      log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
