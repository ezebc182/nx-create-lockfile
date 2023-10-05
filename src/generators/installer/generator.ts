import { Tree, getProjects, formatFiles } from '@nx/devkit'
import { registerNpmScript, registerOperation, configureProject } from './process'

export default async function (tree: Tree) {
  registerNpmScript(tree)
  registerOperation(tree)
  getProjects(tree).forEach(config => configureProject(tree, config))
  await formatFiles(tree)
}