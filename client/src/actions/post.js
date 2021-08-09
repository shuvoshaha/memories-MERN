import * as api from '../api'

export const getPost = () => async(dispatch) => {

    try{
        const { data }  = await api.fetchPost()
        dispatch({ type: 'FETCH_ALL', payload: data })
    }

    catch(err){
        console.log(err.message)
    }
}

export const makePost =(post) => async(dispatch) =>{
    try{
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE_POST', payload: data })
    }

    catch(err){
        console.log(err.message)
    }
}