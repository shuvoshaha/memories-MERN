import express from 'express'
import auth from '../middleware/auth.js'

import { createPost, getPost, updatePost, deletePost, likePost } from '../controller/controller.js'

const router = express.Router()

router.get('/', getPost)
router.post('/', auth, createPost)
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost)
router.patch("/:id/likePost", auth, likePost)


export default router