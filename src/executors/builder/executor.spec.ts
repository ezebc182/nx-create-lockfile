import { BuilderExecutorSchema } from './schema';
import executor from './executor';

const options: BuilderExecutorSchema = {};

describe('Builder Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
