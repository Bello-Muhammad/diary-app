const Pool = require('pg').Pool;

const pgUser = process.env.PG_USERNAME
const pgHost = process.env.PG_HOST
const pgPassword = process.env.PG_PASSWORD
const pgPort = process.env.PG_PORT

const pool = new Pool({
    user: pgUser,
    host: pgHost,
    database: "diarys",
    password: pgPassword, //input the password you use when installing postgresql
    port: pgPort
})

module.exports = pool;