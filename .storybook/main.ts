import type { StorybookConfig } from '@storybook/react-vite'

const base = '/react-components/'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.story.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  docs: { autodocs: false },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },

  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = base
    }

    return config
  },
}

module.exports = config
