import { fetchPost, createPost } from '../api'

export const getPost = () => async(dispatch) => {

    try{
        const { data }  = await fetchPost()
        dispatch({ type: 'FETCH_ALL', payload: data })
    }

    catch(err){
        console.log(err.message)
    }
}

export const makePost =(post) => async(dispatch) =>{
    try{
        const { data } = await createPost(post)
        dispatch({ type: 'CREATE_POST', payload: data })
    }

    catch(err){
        console.log(err.message)
    }
}