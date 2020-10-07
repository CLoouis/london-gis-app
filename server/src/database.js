const postgres = require('pg')
const config = require('./config')

const client = new postgres.Client({
    host: config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME,
})

console.log(config.DATABASE_HOST)

client.connect().then(() => {
    console.log("Connected to postgres database")
}).catch((err) => {
    console.log(err)
})

module.exports = {
    getPlaces : async (type) => {
        const placeQuery = `
            SELECT ST_AsGeoJSON(geom), gid, name, fclass
            FROM place
            WHERE UPPER(fclass) = UPPER($1);`
        const result = await client.query(placeQuery, [ type ])
        return result.rows
    },

    getLands: async (type) => {
        const landQuery = `
            SELECT ST_AsGeoJSON(geom), name, gid, fclass
            FROM land
            WHERE UPPER(fclass) = UPPER($1);`
        const result = await client.query(landQuery, [ type ])
        return result.rows
    }
}
