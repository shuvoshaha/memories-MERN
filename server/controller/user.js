import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'


export const signIn = async (req, res) =>{
    try{

    }

    catch(err){
        res.status(500).json({ message: 'User does not exists' })
    }
}

export const signUp = async (req, res) =>{
    try{

    }

    catch(err){
        res.status(500).json({ message: 'User does not exists' })
    }
}