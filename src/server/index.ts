import { Config, RouteRequest } from '@payloads/common/Next';
import debug from 'debug';
import express, { Router } from 'express';
import { Request } from 'express-serve-static-core';
import next from 'next';

import pageRoutes from './routes';
import serverRoutes from './serverRoutes';
import serverRoues from './serverRoutes';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handler = pageRoutes.getRequestHandler(app);

const log = debug('Luna:Express');

const share = { token: '' };
const config: Config = {};

// type NewRequest =

app
  .prepare()
  .then(() => {
    const server = express();

    /** post body 를 받기 위해서는 필수 */
    server.use(express.json());
    // server.use((req: RouteRequest, _, next) => {
    //   next();
    // });

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

    // const r = Router();
    // r.get('/dd', () => {
    //   debugger;
    // });
    // r.post('/dd', (req, res) => {
    //   debugger;
    //   log(`token: ${req['token']}`);
    //   req['token'] = '11';
    //   res.send({ token: req['token'] });
    // });
    // server.use(r);

    server.post('/dd', (req, res) => {
      debugger;
      log(`token: ${req['token']}`);
      req['token'] = '11';

      share.token = '11';

      // app.render(req, res, page, { ...req.query, ...req.params });
      res.send({ token: req['token'] });
    });

    server.post('/ff', (req, res) => {
      debugger;
      log(`token: ${req['token']}`);
      req['token'] = '11';

      share.token = '22';

      res.send({ token: req['token'] });
    });

    server.use(handler);

    // server.route('/dd').post((req, res) => {
    //   debugger;
    //   log(`token: ${req['token']}`);
    //   req['token'] = '11';
    //   res.end({ token: req['token'] });
    // });

    server.use('/ff', (req, res) => {
      log(`token: ${req['token']}`);
      req['token'] = '22';
      res.send({ token: req['token'] });
    });

    server.route('*').get((req, res) => handler(req, res));

    server.listen(port, () => {
      log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
