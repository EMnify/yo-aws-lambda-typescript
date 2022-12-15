import { describe, it } from '@jest/globals';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import { handler } from '../src';

describe('Handler main method', () => {
  it('Execute handler', async (): Promise<void> => {
    await handler({} as APIGatewayProxyEvent, {} as Context);
  });
});
