import axios from 'axios';

import EitherResponse from '../EitherResponse';

jest.mock('axios');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('EitherResponse', () => {
  const axiosFail = <L>(data: L) => ({
    data,
    status: 400,
    statusText: 'Left',
  });

  const axiosSuccess = <R>(data: R) => ({
    data,
    status: 200,
    statusText: 'Right',
  });

  describe('Instance 테스트', () => {
    it('static 메소드로 인스턴스를 생성할 수 있다', () => {
      const eitherLeft = EitherResponse.Left<null>(axiosFail(null));
      const eitherRight = EitherResponse.Right<number[]>(
        axiosSuccess([1, 2, 3])
      );

      expect(eitherLeft).toBeInstanceOf(EitherResponse);
      expect(eitherRight).toBeInstanceOf(EitherResponse);
    });

    it('static 메소드로 생성한 인스턴스의 값이 제대로 들어가있다', () => {
      const eitherLeft = EitherResponse.Left<{ msg: string }>(
        axiosFail({ msg: 'Error' })
      );
      const eitherRight = EitherResponse.Right<{ name: string }>(
        axiosSuccess({ name: 'John Doe' })
      );

      /**
       * 테스트를 위한 코드
       * 실제 사용에서는 이렇게 값을 빼내서 사용하는 것은 비권장사항
       */
      const valueLeft = eitherLeft['value'];
      const valueRight = eitherRight['value'];

      expect(eitherLeft['type']).toBe('Left');
      expect(eitherRight['type']).toBe('Right');
      expect(valueLeft).toEqual({
        data: { msg: 'Error' },
        status: 400,
        statusText: 'Left',
      });
      expect(valueRight).toEqual({
        data: { name: 'John Doe' },
        status: 200,
        statusText: 'Right',
      });
    });
  });

  describe('체이닝 테스트', () => {
    let eitherLeft: EitherResponse<null>;
    let eitherRight: EitherResponse<{ list: number[] }>;

    beforeEach(async () => {
      // @ts-expect-error
      const mockedAxiosFail = axios.get.mockResolvedValueOnce({
        data: null,
        status: 400,
        statusText: 'Left',
        headers: {},
        config: {},
        request: {},
      });

      // @ts-expect-error
      const mockedAxiosSuccess = axios.get.mockResolvedValueOnce({
        data: {
          list: [1, 2, 3],
        },
        status: 200,
        statusText: 'Right',
        headers: {},
        config: {},
        request: {},
      });

      eitherLeft = EitherResponse.Left<null>(await mockedAxiosFail());
      eitherRight = EitherResponse.Right<{ list: number[] }>(
        await mockedAxiosSuccess()
      );
    });

    it('caseOf 를 사용하면 EitherResponse.value 에서 데이터 조작을 해서 내보낼 수 있다', () => {
      const resNull = eitherLeft.caseOf<null>({
        left: (d) => {
          return d.data;
        },
      });
      expect(resNull).toBeNull();

      const resUndefined = eitherLeft.caseOf<undefined>({
        left: () => undefined,
      }) as undefined;
      expect(resUndefined).toBeUndefined();

      const resNumber = eitherLeft.caseOf<number>({
        left: (d) => Number(d.data),
      }) as number;
      expect(resNumber).toBe(0);

      const resArray = eitherLeft.caseOf<null[]>({
        left: (d) => [d.data],
      }) as null[];
      expect(resArray).toBeInstanceOf(Array);
      expect(resArray.length).toBe(1);

      const resString = eitherRight.caseOf<null, string>({
        right: () => '',
      }) as string;
      expect(resString).toBe('');
    });

    it('map 으로 데이터 타입을 변환할 수 있다', () => {
      const resOriginal = eitherRight.pickRight((d) => d.data);
      const resNumberArray = eitherRight
        .map((d) => {
          return {
            list: d.list.map((d) => `${d}`),
          };
        })
        .pickRight((d) => d.data);

      resOriginal.list.forEach((r) => {
        expect(typeof r).toBe('number');
      });
      resNumberArray.list.forEach((r) => {
        expect(typeof r).toBe('string');
      });

      const resOriginalFail = eitherLeft.pickLeft((d) => d.data);
      const resUndefinedFail = eitherLeft
        .map(() => undefined)
        .pickLeft((d) => d.data);
      expect(resOriginalFail).toBeNull();
      expect(resUndefinedFail).toBeUndefined();
    });
  });
});
