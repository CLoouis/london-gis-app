const Koa = require('koa')
const cors = require('kcors')
const api = require('./api')

const app = new Koa()
const port = process.env.PORT || 5000

const origin = process.env.CORS_ORIGIN | '*'
app.use(cors({ origin }))

app.use(api.routes(), api.allowedMethods())

app.listen(port, () => { console.log(`Server listening at port ${port}`) })
