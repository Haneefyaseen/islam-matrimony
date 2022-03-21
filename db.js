const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'yaseen',
    host: 'localhost',
    port: 5427,
    database: 'postgres'
})

module.exports = pool;