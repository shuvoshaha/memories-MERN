import postMessage from "../model/postMessage.js";

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