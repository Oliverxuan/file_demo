const Router = require('koa-router')

const demoRouter = new Router({ prefix: '/demo' })

const { show } = require('../controller/demo.controller.js')

demoRouter.post('/', show)

module.exports = demoRouter
