import database from '../../repository/connectionDB.js';

export default async function insertProfessions(profession_name){
    const conn = await database()
    const sql = 'INSERT INTO tbl_professions(profession_name) VALUES (?);';
    const insertData = [profession_name];
    
    await conn.query(sql, insertData)
    conn.end()
}