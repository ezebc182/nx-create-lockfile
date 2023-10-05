import { InstallerExecutorSchema } from './schema';
import executor from './executor';

const options: InstallerExecutorSchema = {};

describe('Installer Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
