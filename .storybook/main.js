const { loadConfigFromFile, mergeConfig } = require('vite')
const svgr = require('vite-plugin-svgr').default
const {vanillaExtractPlugin} = require("@vanilla-extract/vite-plugin")

/**
 * @type {import('@storybook/builder-vite').StorybookViteConfig}
 */
const config = {
  stories: ['../src/**/*.story.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      require('path').resolve(__dirname, '../vite.config.ts')
    )

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [vanillaExtractPlugin(), svgr()],
    })
  },
}

module.exports = config
