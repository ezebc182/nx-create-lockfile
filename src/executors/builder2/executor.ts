import {  ExecutorContext } from '@nx/devkit';
import { createPackageJson, createLockFile } from '@nx/js'
import { writeFileSync } from 'fs';
import { Builder2ExecutorSchema } from './schema';
import { yarnToNpm } from 'synp'

export default async function buildExecutor(
  options: Builder2ExecutorSchema,
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

  // do any additional manipulations to "package.json" here

  const lockFile = createLockFile(packageJson, context.projectGraph, 'yarn');
  // writeJsonFile(`${options.outputPath}/package.json`, builtPackageJson);
  writeFileSync(`${options.outputPath}/yarn.lock`, lockFile, {
    encoding: 'utf-8',
  });

  
  const stringifiedPackageLock = yarnToNpm(options.outputPath, true)
  console.log(stringifiedPackageLock)
  writeFileSync(`${options.outputPath}/package-lock.lock`, stringifiedPackageLock, {
    encoding: 'utf-8',
  });
  return { success: true };
  // any subsequent executor code
}