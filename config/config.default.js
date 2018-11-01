'use strict'

const path = require('path')

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1512091179584_6027'

  // add your config here
  config.middleware = []

  config.security = {
    csrf: false
  }

  // 请在 config.prod.js 中配置实际的值
  config.wechat = {
    token: 'dasha206',
    appid: 'wxb59598ba70d61e62',
    encodingAESKey: '',
    secret: 'ca6ff0a39b4d2ed21d1d8439383c1ffe'
  }

  config.wechatApi = {
    appId: 'wxb59598ba70d61e62',
    appSecret: 'ca6ff0a39b4d2ed21d1d8439383c1ffe'
  }

  // config.mongoose = {
  //   client: {
  //     url: 'mongodb://127.0.0.1/wechat',
  //     options: {}
  //   }
  // }

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0
    }
  }

  // view ejs engine config
  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  config.ejs = {
    root: path.join(appInfo.baseDir, 'app/view'),
    cache: true,
    debug: false,
    compileDebug: true,
    delimiter: null,
    strict: false
  }

  return config
}
