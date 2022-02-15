import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Upload from './models/UploadModel.js';
import cookieParser from 'cookie-parser';
import router from './Routes/index.js';
import db from "./config/Database.js";

dotenv.config();

const app = express();
//upload to pgadmin

try {
    await db.authenticate();
    console.log('Database Connected')
} catch (err) {
    console.error(err)
}


app.use(cors({credentials: true, origin:'https://kenes-tours.netlify.app'}));
app.use(cookieParser());
app.use(express.json());
app.use(router)
app.use(express.urlencoded(({ extended: true })))

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})

app.get('/api/images', async (req, res) => {
    const images = await Upload.findAll({
        // where:{
        //     filetype: 'image/jpeg'
        // }
    })
    res.json(images)
})

app.post('/newrest', async (req, res) => {
    console.log(req.body)
    try {
        const rest =await Upload.create(req.body)
        await res.json(rest)
    } catch (error) {
        console.log(error)
        await res.status(401).json({msg:"not ok"})
    }
  
    
    
})
