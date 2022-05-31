import mysql from 'mysql2/promise'

export default async function connect() {

  const connection = await mysql.
    createConnection({
      host: 'localhost',
      user: 'root',
      password: 'G@abriel',
      database: 'eteclinic'
    })
    return connection
}