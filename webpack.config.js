const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir);

let baseUrl = process.env.VUE_APP_BASEURL;

module.exports = {
    publicPath: './',
    lintOnSave: true,
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        publicPath: baseUrl, // 和 baseUrl 保持一致
        autoOpenBrowser: true,
        proxyTable: {
            '/': {
                target: 'http://192.168.12.115',
                changeOrigin: true // 是否在本机创建target地址的虚拟服务，避免跨域问题
            }
        },
        port: '3000',
        overlay: { // eslint 配置
            warnings: true,
            errors: true
        }
    },
    // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
    chainWebpack: config => {
        // 重新设置 alias
        config.resolve.alias
            .set('@', resolve('src'))
        config
            .entry('index')
            .add('babel-polyfill');

    }
};
