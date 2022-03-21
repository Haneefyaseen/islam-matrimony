const {Pool} = require('pg');

const proConfig = process.env.DATABASE_URL

const devConfig = {
    user: 'postgres',
    password: 'yaseen',
    host: 'localhost',
    port: 5427,
    database: 'postgres'
}

const pool = new Pool({
    connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,
    ssl: {
        rejectUnauthorized: false
      }
})

module.exports = pool;