import * as api from './api'

export const createPost = () =>{
    type: 'CREATE_POST'
}

export const getPost = () => async(dispatch) => {

    const { data } = await api.fetchPost()
    try{
        
        dispatch({ type: 'FETCH_ALL', payload: data })
    }

    catch(err){
        console.log(err.message)
    }
}