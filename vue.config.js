module.exports = {
  css: {
     sourceMap: true,
  },
  baseUrl: '/',
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  pages: {
      index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
      },
  },
  configureWebpack: {
      performance: {
          maxAssetSize: 500000,
      },
  },
  devServer: {
      proxy: {
          '.*': {
              target: `http://localhost:${process.env.PORT}`,
              ws: true,
          },
      },
  },
};