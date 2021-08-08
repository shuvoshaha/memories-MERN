import postMessage from "../model/postMessage.js";

// get post from db
export const getPost =  async (req, res) =>{
    try{
        const data = postMessage.find()
        res.status(200).json(data)
    }

    catch(err){
        res.status(404).json({ message: err.message })
    }
}