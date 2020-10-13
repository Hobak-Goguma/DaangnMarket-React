import type {
  ApiControllerRequest,
  ApiControllerResponse,
  CustomRequest,
} from '@payloads/common/Next';
import TokenRequester from '@requesters/token/TokenRequester';
import debug from 'debug';

const log = debug('Luna:api/token');

const handler = async (
  req: ApiControllerRequest,
  res: ApiControllerResponse
) => {
  log('handler');

  console.log('들어옴');
  const requester = new TokenRequester(req);
  const payload = await requester.getToken({
    username: req.body.username,
    password: req.body.password,
  });

  res.end(JSON.stringify(payload));
};

export default handler;
