import express from "express";
import { config } from 'dotenv';
import router from './routers/router.js'
const env = config()

const app = express()
const port = process.env.PORT

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})