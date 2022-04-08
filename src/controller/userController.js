import Router from "express";
import db from "../service/userService.js";
import {body, validationResult} from 'express-validator';
const router = Router();


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Deu certo'
    });
})

router.post('/', [
    body('email').isEmail().withMessage("Email informado é invalido!"),
], async(req, res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password, username} = req.body;
    await db.insertUser(email, password, username);
    res.status(201).json({
        message: 'New user registered'
    });
})

export default router;