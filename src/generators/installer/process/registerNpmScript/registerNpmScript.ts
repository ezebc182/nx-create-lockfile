import { join } from 'path'
import { Tree, readJson, workspaceRoot, writeJsonFile } from '@nx/devkit'
import { name } from '../../../../../project.json'

export const registerNpmScript = (tree: Tree): void => {
  const packageJson = readJson(tree, 'package.json') as ReturnType<typeof readJson> & { scripts?: Record<string, string> }
  if (!packageJson.scripts) packageJson.scripts = {}
  packageJson.scripts[name] = `nx ${name}`
  packageJson.scripts[`${name}:affected`] = `nx affected --target=${name} --all`
  writeJsonFile(join(workspaceRoot, 'package.json'), packageJson)
}