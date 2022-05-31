import express from "express"
import dbPatient from "../service/patientService.js"
import dbAdress from "../service/adressService.js"
import {body, validationResult} from 'express-validator'

const router = express.Router()

router.post('/', async (req, res) => {

  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({message: errors.array()})
  }

  const {cep, street, number, district, city, state} = req.body
  await dbAdress(cep, street, number, district, city, state)
  
  const {cpf, client_name, client_phone, client_smartphone,
    client_email, blood_type, FK_id_address} = req.body
  await dbPatient(cpf, client_name, client_phone, client_smartphone,
    client_email, blood_type, FK_id_address)

    res.status(201).json({message:
      `${client_name} and addresses ${cep} were registered`
    })  
})

export default router