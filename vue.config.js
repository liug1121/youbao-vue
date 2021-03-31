module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/report/'
    : '/report/',

    devServer: {
        proxy: {
          "/reportbackend/": {
            //业务类的接口请求地址，这里的api可以是后端的工程名
            changeOrigin: true,
            target: "http://xbk.tdj.cn/"
          }
        }
      }
  }
  