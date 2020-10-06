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