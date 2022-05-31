import Router from "express";
import dbLogin from "../service/loginService.js";
const router = Router();

router.post('/', async(req, res) => {
    const {email, password} = req.body
    const validateUser = await dbLogin(email, password);

    if (validateUser){
        res.status(200).json({
            message: 'login successfully'
        })
    }else{
        res.status(401).json({message: 'Invalid login or password'})
    }
})


export default router;