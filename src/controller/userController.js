import Router from "express";
import dbUser from "../service/userService.js"
import {body, validationResult} from 'express-validator';
const router = Router();

router.post('/', [
    body('email').isEmail().withMessage("invalid Email!"),
], async(req, res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password, username} = req.body;
    await dbUser(email, password, username);
    res.status(201).json({
        message: 'New user registered'
    });
})

export default router;