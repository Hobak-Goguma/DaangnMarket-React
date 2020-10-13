import { IncomingMessage } from 'http';

import {
  NextApiRequest,
  NextApiResponse,
  NextComponentType,
  NextPageContext,
} from 'next';

interface CustomField {
  token?: string;
}

export interface CustomRequest extends Omit<NextPageContext, 'res'> {
  req?: IncomingMessage & CustomField;
}

export interface ApiControllerRequest extends NextApiRequest {}

export interface ApiControllerResponse extends NextApiResponse {}

export interface InitialPropsRequest extends IncomingMessage, CustomRequest {}

export type LunaPage<P = {}, IP = P> = NextComponentType<CustomRequest, IP, P>;
