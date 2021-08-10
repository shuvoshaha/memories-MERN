import { fetchPost, createPost, updatePost } from '../api'

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

export const updatePosts = (id, post) => async (dispatch) =>{

    const { data } = await updatePost(id, post)
    try{
        dispatch({ type: 'UPDATE_POST', payload: data })
    }
    catch(err){
        console.log(err.message)
    }
}