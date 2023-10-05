import { Builder2ExecutorSchema } from './schema';
import executor from './executor';

const options: Builder2ExecutorSchema = {};

describe('Builder2 Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
