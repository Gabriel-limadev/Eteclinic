import database from '../../repository/connectionDB.js';

export default async function login(email, password){
    const conn = await database()
    const sql = "SELECT * FROM tbl_users WHERE email = (?) AND password = (?);"
    const findData = [email, password]
    const [rows] = await conn.query(sql, findData)

    conn.end()
    return rows[0]
}