module.exports = {
  addons: [
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-notes/register-panel"
  ],
  presets: ["@storybook/addon-docs/preset"],
  stories: ["../src/**/*.stories.(mdx|ts)"]
};
