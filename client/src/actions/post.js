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

export const createPost =(post) => async(dispatch) =>{
    try{
        const { data } = 
        dispatch({ type: 'CREATE_POST', payload: post })
    }

    catch(err){
        console.log(err.message)
    }
}