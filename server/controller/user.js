import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import user from '../model/user.js'
import express from 'express'
const router = express.Router()


// signin user
export const signIn = async (req, res) =>{
    const { email, password } = req.body
    try{
        const existsUser = await user.findOne({ email })

        if(!existsUser) return res.status.status(500).json({ message: 'Email does not exists' });

        const isPasswordTrue = await bcrypt.compare(password, existsUser.password)
        if(!isPasswordTrue) res.status.status(500).json({ message: 'Password is does not match' });

        const token = jwt.sign({ email: existsUser.email, id: existsUser._id }, 'test123', { expiresIn: '1h'})
        res.status(200).json({ result: existsUser, token })
    }

    catch(err){
        res.status(500).json({ message: 'User does not exists' })
    }
}

// signup user
export const signUp = async (req, res) =>{
    const { fname, lname, email, password, cpassword,  } = req.body
    try{

        const existUser = await user.findOne({ email })
        if(existUser) return res.status(500).json({ message: 'user already exists' })

        if(password !== cpassword) return res.status(500).json({ message: 'password is does not match' })

       else{
        const hashPassword = await bcrypt.hash(password, 12)
        const result = await user.create({  name: `${fname} ${lname}`,  password: hashPassword, email })
        const token =  jwt.sign({ email: result.email, id: result._id }, 'test123', { expiresIn: '1h' })

        res.status(201).json({ result, token })
       }
    }

    catch(err){
        res.status(500).json({ message: 'User does not exists' })
    }
}

export default router