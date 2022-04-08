import { Router } from "express";
import user from '../controller/userController.js'

const router = Router()

router.use('/user', user)

export default router

