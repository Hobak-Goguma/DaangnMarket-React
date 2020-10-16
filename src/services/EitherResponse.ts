import type { AxiosResponse } from 'axios';

export interface Value<T>
  extends Pick<AxiosResponse<T>, 'data' | 'status' | 'statusText'> {}

export default class EitherResponse<T> {
  private noop: (v?: Value<T>) => any = () => {};

  constructor(private value: Value<T>, private type: 'Left' | 'Right') {}

  static Left<L>(l: Value<L>): EitherResponse<L> {
    return new EitherResponse<L>(l, 'Left');
  }

  static Right<R>(r: Value<R>): EitherResponse<R> {
    return new EitherResponse<R>(r, 'Right');
  }

  map<R>(fn: (v: T) => R): EitherResponse<R> {
    const value = fn(this.value.data);
    const res = {
      ...this.value,
      data: value,
    } as Value<R>;
    return EitherResponse.Right<R>(res);
  }

  caseOf<L, R>({
    left,
    right,
  }: {
    left?: (v: Value<T>) => L;
    right?: (v: Value<T>) => R;
  }): L | R {
    if (this.type === 'Left') {
      return this.pickLeft<L>(left || this.noop);
    }

    return this.pickRight<R>(right || this.noop);
  }

  pickLeft<L>(left: (v: Value<T>) => L): L {
    return left(this.value);
  }

  pickRight<R>(right: (v: Value<T>) => R): R {
    return right(this.value);
  }
}
