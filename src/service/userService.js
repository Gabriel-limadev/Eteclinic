import database from "../database/connection.js"; 


const insertUser = async (email, password, username) => {
    const sql = 'INSERT INTO tbl_users(email, password, username) VALUES ?, ?, ?);';
    const insertData = [email, password, username];
    
    await database.connect();
    await database.query(sql, insertData);
    database.end()
}

export default {insertUser}; 

