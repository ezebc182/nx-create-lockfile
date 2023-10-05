import {
  ExecutorContext,
  //  writeJsonFile
} from '@nx/devkit';
import { createPackageJson, createLockFile } from '@nx/js';
import { writeFileSync } from 'fs';
import { BuilderExecutorSchema } from './schema';
// import { buildTargetFromScript } from 'nx/src/utils/package-json';

export default async function buildExecutor(
  options: BuilderExecutorSchema,
  context: ExecutorContext
) {
  // ...your executor code

  const packageJson = createPackageJson(
    context.projectName,
    context.projectGraph,
    {
      root: context.root,
      isProduction: true, // We want to strip any non-prod dependencies
    }
  );

  // const builtPackageJson = buildTargetFromScript("tsc", context.projectsConfigurations.projects)

  // do any additional manipulations to "package.json" here

  const lockFile = createLockFile(packageJson, context.projectGraph);
  // writeJsonFile(`${options.outputPath}/package.json`, builtPackageJson);
  writeFileSync(`${options.outputPath}/test.lock}`, lockFile, {
    encoding: 'utf-8',
  });

  return { success: true };
  // any subsequent executor code
}
