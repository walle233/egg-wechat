'use strict'

module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const ModelSchema = new Schema(
    {},
    {
      strict: false,
      timestamps: true
    }
  )

  return mongoose.model('wechat', ModelSchema)
}
