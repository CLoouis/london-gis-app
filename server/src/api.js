const Router = require('koa-router')
const database = require('./database')

const router = new Router()

router.get('/hello', async ctx => {
    ctx.body = 'Hello World'
})

router.get('/places/:type', async ctx => {
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

router.get('/lands/:type', async ctx => {
    const type = ctx.params.type
    const results = await database.getLands(type)
    if (results.length === 0) { 
        ctx.throw(404) 
    }
  
    const boundaries = results.map((row) => {
      let geojson = JSON.parse(row.st_asgeojson)
      geojson.properties = { name: row.name, type: row.fclass, id: row.gid }
      return geojson
    })
  
    ctx.body = boundaries
})

module.exports = router