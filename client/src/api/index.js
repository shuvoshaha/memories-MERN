import axios from 'axios'

const url = "http://localhost:8000/posts"

export const fetchData = axios.get(url) 