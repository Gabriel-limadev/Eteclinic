import database from '../../repository/connectionDB.js';

export default async function insertUser(email, password, username){
    const conn = await database()
    const sql = 'INSERT INTO tbl_users(email, password, username) VALUES (?, ?, ?);';
    const insertData = [email, password, username];
    
    await conn.query(sql, insertData)
    conn.end()
}