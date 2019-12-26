module.exports = {
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
};