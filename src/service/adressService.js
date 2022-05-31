import database from '../../repository/connectionDB.js';

export default async function insertAdress(cep, street, number, district, city, state){
  const conn = await database()
  const sql = "INSERT INTO tbl_adresses(cep, street, number, district, city, state) VALUES(?, ?, ?, ?, ? ,?);"  
  const insertData = [cep, street, number, district, city, state] 
  
  await conn.query(sql, insertData)
  conn.end()
}