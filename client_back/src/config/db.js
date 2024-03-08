const{Pool} = require( 'pg');

const pool = new Pool({
    user: 'postgres',
    host: '172.17.0.1',
    database: 'client',
    password: 'sua_senha',
    port: 5432,
});

module.exports = pool;