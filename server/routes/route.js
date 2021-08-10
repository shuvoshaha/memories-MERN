import express from 'express'
import { createPost, getPost, updatePost, deletePost, likePost } from '../controller/controller.js'

const router = express.Router()

router.get('/', getPost)
router.post('/', createPost)
router.patch("/:id", updatePost);
router.delete("/:id", deletePost)
router.patch("/:id/likepost", likePost)

export default router