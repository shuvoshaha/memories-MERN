import postMessage from "../model/postMessage.js";
import mongoose from 'mongoose';
import express from 'express'
const router = express.Router()

// get post from db
export const getPost = async (req, res) => {
    try {
        const data = await postMessage.find()
        res.status(200).json(data)
    }

    catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// create post into db
export const createPost = async (req, res) => {
    const formData = req.body;
    const newData = new postMessage({ ...formData, creator: req.userId, createAt: new Date().toISOString() })

    try {
        await newData.save()
        res.status(200).json(newData)

    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
}

//update post
export const updatePost = async (req, res) => {

    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    const updatedPost = { creator, title, message, tags, selectedFile, createAt: Date.now() };

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post update");

        else {
            const updatePost = await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });
            res.status(201).json(updatePost)
        }
    }

    catch (err) {
        res.status(404).json({ message: err.message })
    }

}

// Delete Post from db

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Id is not valid");

        else {
            await postMessage.findByIdAndRemove(id)
            res.status(201).send("Delete Successfully");

        }
    }

    catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// Like counter

export const likePost = async (req, res) => {
    const { id } = req.params
    
    try{
        
        console.log("userID: " + req.userId)
        if(!req.userId) return res.json({ message: 'Unatuthenticate' });

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
       
        const post = await postMessage.findById(id);
        
        const index =  post.likes.findIndex((id) => id === String(req.userId))

        if(index === -1){
            // like
             post.likes.push(req.userId)
        }
        else{
            post.likes =  post.likes.filter((id) => id !== String(req.userId))
        }
       
        const updatedPost = await postMessage.findByIdAndUpdate(id, post , { new: true });
        
        res.json(updatedPost);
        console.log(updatePost)
    }

    catch (err) {
        res.status(404).json({ message: err.message })
    } 

}

export default router;

