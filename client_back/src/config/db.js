const{Pool} = require( 'pg');

const pool = new Pool({
    user: 'postgre',
    host: '172.17.0.1',
    database: 'meu_postgre',
    password: 'sua_senha',
    port: 55432,
});

module.exports = pool;