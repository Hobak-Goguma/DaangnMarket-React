import { TokenPayload } from '@payloads/token/TokenPayload';
import EitherResponse from '@services/EitherResponse';

import TokenRequester from '../TokenRequester';

describe('TokenRequester', () => {
  let requester: TokenRequester;
  beforeEach(() => {
    requester = new TokenRequester();
  });

  describe('데이터를 불러오기 성공', () => {
    it('맞는 username, password 를 넘기면 토큰을 받아온다', async (done) => {
      const res = (await requester.getToken({
        username: 'ddusi',
        password: '1234',
      })) as EitherResponse<TokenPayload>;

      const payload = res.pickRight((d) => d.data);

      expect(res).toMatchSnapshot();
      done();
    });
  });
});
