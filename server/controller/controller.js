import postMessage from "../model/postMessage.js";
import mongoose from 'mongoose';

// get post from db
export const getPost =  async (req, res) =>{
    try{
        const data = await postMessage.find()
        res.status(200).json(data)
    }

    catch(err){
        res.status(404).json({ message: err.message })
    }
}

// create post into db
export const createPost = async (req, res) =>{
    const formData = req.body;
    const newData =  new postMessage(formData)

    try{
         await newData.save()
        res.status(200).json(newData)

    }
    catch(err){
        res.status(404).json({ message: err.message })
    }
}

//update post
export const updatePost = async (req, res) => {

    const { id } = req.params;
    const post = req.body;

    try{
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post update");

       const updatePost =  await postMessage.findByIdAndUpdate(id, post, { new: true });
       res.status(201).json(updatePost)
    }

    catch(err){
        res.status(404).json({ message: err.message })
    }
    
}