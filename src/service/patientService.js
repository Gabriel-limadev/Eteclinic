import database from '../../repository/connectionDB.js';

export default async function insertPatient(cpf, client_name, client_phone, client_smartphone,
    client_email, blood_type, FK_id_address){

  const conn = await database()
  
  const sql = "INSERT INTO tbl_clientes(cpf, client_name, client_phone, client_smartphone, client_email, blood_type, FK_id_address) VALUES(?, ?, ?, ?, ? ,? ,?);"
  
  const insertData = [cpf, client_name, client_phone, client_smartphone,
    client_email, blood_type, FK_id_address] 
  
  await conn.query(sql, insertData)
  conn.end()
}