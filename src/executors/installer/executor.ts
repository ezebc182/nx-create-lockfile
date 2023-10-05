import { InstallerExecutorSchema } from './schema';

export default async function runExecutor(options: InstallerExecutorSchema) {
  console.log('Executor ran for Installer', options);
  return {
    success: true,
  };
}
