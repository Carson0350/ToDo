const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'password',
  database: 'postgres',
  max: 20,
});

pool.connect()
  .then(() => console.log('connected to a database'))
  .catch((err) => console.log(err));

module.exports = pool;
