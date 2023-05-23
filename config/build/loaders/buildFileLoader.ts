export const buildFileLoader = () => ({
  test: /\.(png|jpe?g|gif|woff|woff2|ttf)$/i,
  use: [
    {
      loader: 'file-loader'
    }
  ]
});
