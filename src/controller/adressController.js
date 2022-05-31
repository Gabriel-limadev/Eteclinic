import Router from "express";
import dbAdress from "../service/adressService.js";
import {body, validationResult} from 'express-validator';
const router = Router();

router.post('/', async(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {cep, street, number, district, city, state} = req.body
    await dbAdress(cep, street, number, district, city, state)
    
    res.status(201).json({
        message: 'New adress registered'
    });
})
export default router; 