import Router from "express";
import dbProfession from "../service/professionService.js";
import {body, validationResult} from 'express-validator';
const router = Router();

router.post('/', [
    body("profession_name").notEmpty().withMessage("Profession name is not informed...")
  ], async(req, res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {profession_name} = req.body;
    await dbProfession(profession_name);
    res.status(201).json({
        message: 'New profession registered'
    });
})

export default router;