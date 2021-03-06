import axios from 'axios'

// const url = "http://localhost:8000/posts"

const API = axios.create({ baseURL: 'http://localhost:8000' })

// when login and get data from header backend
API.interceptors.request.use((req) =>{
    if(localStorage.getItem("profile")){
        req.headers.Authorization = `${JSON.parse(localStorage.getItem("profile")).token}`
    }
     return req;
})

export const fetchPost = () => API.get('/posts') 
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost =(id, updatePost) => API.patch(`/posts/${id}`, updatePost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const like = (id) => API.patch(`/posts/${id}/likePost`)
export const signInForm = (formData) => API.post('/user/signin', formData)
export const signUpForm = (formData) => API.post('/user/signup', formData)