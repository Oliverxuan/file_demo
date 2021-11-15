class DemoController {
  async show(ctx, next) {
    console.log('show成功获取！')
    ctx.body = 'show'
  }
}

module.exports = new DemoController()
