import axios from 'axios'

const url = "http://localhost:8000/posts"

const API = axios.create({ baseURL: 'http://localhost:8000/posts' })

export const fetchPost = () => API.get(url) 
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost =(id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const like = (id) => axios.patch(`${url}/${id}/likePost`)
export const signInForm =(formData) => axios.post()
export const signUpForm =(formData) => axios.post()