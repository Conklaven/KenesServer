import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
//need for connecting to pgadmin
import db from "./config/Database.js"
//define table:
import Upload from './models/UploadModel.js'
import cookieParser from 'cookie-parser';
import router from './Routes/index.js'

// to send to database 
// npm sequelize and pg pg-hstore

dotenv.config()

const app = express();
//upload to pgadmin

try {
    await db.authenticate();
    console.log('Database Connected')
} catch (err) {
    console.error(err)
}

// const auth = ((req, res, next) => {
//     console.log('jjj')
//     if(true) res.json({ msg:'login again'})
// })
app.use(cors({credentials: true, origin:'https://kenes-tours.netlify.app/'}));
app.use(cookieParser());
app.use(express.json());
app.use(router)

// app.use(auth);
// app.use(express.urlencoded())

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
