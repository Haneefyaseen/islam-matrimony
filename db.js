const {Pool} = require('pg');

const proConfig = process.env.DATABASE_URL

// const pool = new Pool({
//     user: 'postgres',
//     password: 'yaseen',
//     host: 'localhost',
//     port: 5427,
//     database: 'postgres'
// })

const pool = new Pool(proConfig)

module.exports = pool;