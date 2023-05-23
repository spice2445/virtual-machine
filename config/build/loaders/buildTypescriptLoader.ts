export const buildTypescriptLoader = () => ({
  // Если не используем тайпскрипт - нужен babel-loader
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/
});
