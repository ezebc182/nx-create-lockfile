import { Tree, ProjectConfiguration, updateProjectConfiguration } from '@nx/devkit'

export const configureProject = (tree: Tree, config: ProjectConfiguration): void => {
  config.targets['installer'] = {
    executor: 'nx:run-commands',
    options: {
      commands: [
        {
          command: 'yarn install',
          forwardAllArgs: true
        }
      ],
      cwd: config.root,
      parallel: false // check this
    }
  }
  updateProjectConfiguration(tree, config.name, config)
}