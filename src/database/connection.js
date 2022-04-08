import pkg from 'pg';

const client = new pkg.Client({
    user: "gabriel",
    host: "localhost",
    database: "db_eteclinic",
    password: "gabriel",
    port: 5432,
})

export default client;