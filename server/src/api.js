const Router = require('koa-router')
const database = require('./database')

const router = new Router()

router.get('/hello', async ctx => {
    ctx.body = 'Hello World'
})

module.exports = router