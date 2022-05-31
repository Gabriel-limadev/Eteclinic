import express from "express"
import dbSpecialist from "../service/specialistService.js"
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
  
  const {registry, specialist_name, specialist_phone,
    specialist_smartphone, specialist_email, 
    FK_id_address, FK_id_profession} = req.body
  await dbSpecialist(registry, specialist_name, specialist_phone,
    specialist_smartphone, specialist_email, 
    FK_id_address, FK_id_profession)

    res.status(201).json({message:
      `${specialist_name} and addresses ${cep} were registered`
    })  
})

export default router