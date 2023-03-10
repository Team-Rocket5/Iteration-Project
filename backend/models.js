const { Pool } = require('pg')

const PG_URI =
  'postgres://bcbrrcch:7njJP3qEeFu7YQYyTKfupNQ6F7ZNMiWp@ruby.db.elephantsql.com/bcbrrcch' //new db ends in bcbrrcch

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
  password: process.env.PG_PASSWORD,
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text)
    return pool.query(text, params, callback)
  },
}
