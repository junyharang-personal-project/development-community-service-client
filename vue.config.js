const path = require('path');
const defaultSettins = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
} // resolve(dir) 끝

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,

 devServer: {
    //  port : port,
    //  open : true,
    // overlay: {
    //   warnings : false,
    //   errors : true,
    // }, // overlay 끝

     proxy: {
       // Proxy 요청을 보낼 때 api의 시작 부분
       '/api': {
        // Proxy 요청을 보낼 서버 주소
         target: 'http://127.0.0.1:8080',
        changeOrigin: true,
       }, // 'api' 끝
     }, // proxy 끝
   } // devServer 끝
} // module.exports 끝
