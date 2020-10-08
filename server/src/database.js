const postgres = require('pg')
const config = require('./config')

const client = new postgres.Client({
    host: config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME,
})

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
            WHERE UPPER(fclass) = UPPER($1)
            LIMIT 25;`
        const result = await client.query(placeQuery, [ type ])
        return result.rows
    },

    getPlacesByName : async (name) => {
        const placeByNameQuery = `
            SELECT name, fclass, ST_AsGeoJSON(geom)
            FROM place
            WHERE UPPER(name) LIKE '%${name.toUpperCase()}%';
        `
        const result = await client.query(placeByNameQuery)
        return result.rows
    },

    getLands: async (type) => {
        const landQuery = `
            SELECT ST_AsGeoJSON(geom), name, gid, fclass
            FROM land
            WHERE UPPER(fclass) = UPPER($1)
            LIMIT 25;`
        const result = await client.query(landQuery, [ type ])
        return result.rows
    },

    getLandInformation: async (name) => {
        const landInformationQuery = `
            SELECT name, fclass, ST_AsGeoJSON(geom), ST_AREA(ST_TRANSFORM(geom, 32637)) as area
            FROM land
            WHERE UPPER(name) LIKE '%${name.toUpperCase()}%';
        `
        const result = await client.query(landInformationQuery)
        return result.rows
    }
}
