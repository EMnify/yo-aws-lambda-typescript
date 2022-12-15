import * as dotenv from 'dotenv';
import { z } from 'zod';

const ConfigSchema = z.object({
  NODE_ENV: z.string(),
});

dotenv.config();

export const config = ConfigSchema.parse(process.env);
