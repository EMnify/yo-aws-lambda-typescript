import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { logger } from './logger';

/**
 * Handler for Lambda invocation. Handler is called by Lambda runtime
 * and processes single event received from the runtime.
 */
export const handler = async (event: APIGatewayProxyEvent, _ctx: Context) => {
  logger.info({ message: 'Received Event', event });
};
