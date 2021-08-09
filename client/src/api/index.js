import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

export const fetchPost = axios.get(url) 
export const createPost =(post) => axios.post(url, post)