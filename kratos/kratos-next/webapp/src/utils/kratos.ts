import { Configuration, FrontendApi } from '@ory/client-fetch';
import { KRATOS_API_URL } from './config';

const config = new Configuration({
  headers: {
    Accept: 'application/json',
  },
  basePath: KRATOS_API_URL,
});

/**
 * @description This initializes the Kratos client
 */
export const kratos = new FrontendApi(config);
