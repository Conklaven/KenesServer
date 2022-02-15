import Users from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Register =  async (req, res) => {
    const {email, password} = req.body
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            email : email,
            password : hashPassword,
        });
        res.json({msg: 'Registered Successfully'});
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'Email already Exists'})
    }
}

export const Login = async (req,res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(400).json({msg:'Password mismatch'})
        const userID = user[0].id;
        const email =user[0].email
        console.log(`Email = ${email}`)
        console.log(`userID = ${userID}`)
        const accessToken = jwt.sign({userID,email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '60s'
        })
        console.log(`accesstoken: ${accessToken}`)
        res.cookie('accessToken', accessToken, {
            httpOnly :false,
            sameSite: 'Lax',
            maxAge: 60 * 1000
        })
        res.json({accessToken})
    } catch (error) {
        console.log(error)
        res.status(404).json({msg:'Email Not Found'})
    }
}