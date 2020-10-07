const Router = require('koa-router')
const database = require('./database')

const router = new Router()

router.get('/hello', async ctx => {
    ctx.body = 'Hello World'
})

router.get('/place/:type', async ctx => {
    const type = ctx.params.type
    const results = await database.getPlaces(type)

    if (results.length === 0) { 
        ctx.throw(404) 
    }
  
    const places = results.map((row) => {
        let geojson = JSON.parse(row.st_asgeojson)
        geojson.properties = { name: row.name, type: row.fclass, id: row.gid }
        return geojson
    })
  
    ctx.body = places
})

module.exports = router