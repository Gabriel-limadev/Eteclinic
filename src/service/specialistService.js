import database from '../../repository/connectionDB.js';

export default async function insertSpecialist(registry, specialist_name, specialist_phone,
    specialist_smartphone, specialist_email, 
    FK_id_address, FK_id_profession){

  const conn = await database()
  
  const sql = "INSERT INTO tbl_especialistas(registry, specialist_name, specialist_phone, specialist_smartphone, specialist_email, FK_id_address, FK_id_profession) VALUES(?, ?, ?, ?, ? ,? ,?);"
  
  const insertData = [registry, specialist_name, specialist_phone,
    specialist_smartphone, specialist_email, 
    FK_id_address, FK_id_profession] 
  
  await conn.query(sql, insertData)
  conn.end()
}