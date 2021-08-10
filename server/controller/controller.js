import postMessage from "../model/postMessage.js";
import mongoose from 'mongoose';

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
    const newData = new postMessage(formData)

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
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

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