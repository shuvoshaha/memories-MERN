import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile:  String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    likeCount: {
        type: Number,
        default: 0
    },
    
})

const postMessage = mongoose.model("postMessage", postSchema)

export default postMessage