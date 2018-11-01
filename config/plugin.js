'use strict'

// had enabled by egg
// exports.static = true;
module.exports.wechatApi = {
  enable: true,
  package: 'egg-wechat-api'
}

module.exports.redis = {
  enable: true,
  package: 'egg-redis'
}
module.exports.mongoose = {
  enable: true,
  package: 'egg-mongoose'
}
module.exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
}
