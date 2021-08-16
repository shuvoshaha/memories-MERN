import { signInForm, signUpForm} from '../api'

export const signIn = (formData, history) => async(dispatch) =>{
    const { data } = await signInForm(formData)

    try{
        dispatch({ type: 'AUTH',  data })
        history.push('/')
    }

    catch(e){
        console.log(e.message)
    }
}

export const signUp = (formData, history) => async(dispatch) =>{
    const { data } = await signUpForm(formData)

    try{
        dispatch({ type: 'AUTH',   data })
        history.push('/')
    }

    catch(e){
        console.log("front problem")
    }
}