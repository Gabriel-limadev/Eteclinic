import { Router } from 'express';
import user from '../controller/userController.js'
import login from '../controller/loginController.js'
import profession from '../controller/professionController.js'
import adress from '../controller/adressController.js'
import patient from '../controller/patientController.js'
import specialist from '../controller/specialistController.js'


const router = Router()

router.use('/user', user)
router.use('/login', login)
router.use('/profession', profession)
router.use('/adress', adress)
router.use('/patient', patient)
router.use('/specialist', specialist)

export default router