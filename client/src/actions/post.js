import { fetchPost, createPost, updatePost, deletePost, like } from '../api'

// Get all data from db
export const getPost = () => async (dispatch) => {

    try {
        const { data } = await fetchPost();
        dispatch({ type: 'FETCH_ALL', payload: data })
    }

    catch (err) {
        console.log(err.message)
    }
}

export const makePost = (post) => async (dispatch) => {
    try {
        const { data } = await createPost(post)
        dispatch({ type: 'CREATE_POST', payload: data })
    }

    catch (err) {
        console.log(err.message)
    }
}

export const updatePosts = (id, post) => async (dispatch) => {

    const { data } = await updatePost(id, post)
    try {
        dispatch({ type: 'UPDATE_POST', payload: data })
    }
    catch (err) {
        console.log(err.message)
    }
}

// Delete post
export const deletePosts = (id) => async (dispatch) => {
    await deletePost(id)
    try {
        dispatch({ type: 'DELETE_POST', payload: id })
    }

    catch (err) {
        console.log(err.message)
    }

}

// Like post
export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem("profile"))
    const { data } = await like(id)

    try {
        dispatch({ type: 'LIKE_POST', payload: data })
    }
    catch (err) {
        console.log(err)
    }
}