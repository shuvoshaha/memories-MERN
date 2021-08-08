import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    createAt: {
        type: Date,
        default: new Date
    },
    likeCount: {
        type: Number,
        default: 0
    },
    selectedFile:  String
})

const postMessage = mongoose.model("post-message", postSchema)

export default postMessage