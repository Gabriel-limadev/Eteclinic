import Router from "express";
const router = Router();

export default router.get('/teste', (req, res) => {
    res.status(200).json({
        message: 'Deu certoooooooooooooooooooooooooooooo'
    })
})

