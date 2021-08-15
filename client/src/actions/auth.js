import { signInForm, signUpForm} from '../api'

export const signIn = (formData, history) => async(dispatch) =>{
    const { data } = signInForm(formData)

    try{
        dispatch({ type: 'SIGNIn', authData: data })
        history.push('/')
    }

    catch(e){
        console.log(e.message)
    }
}

export const signUp = (formData, history) => async(dispatch) =>{
    const { data } = signUpForm(formData)

    try{
        dispatch({ type: 'SIGNUP', authData: data })
        history.push('/')
    }

    catch(e){
        console.log(e.message)
    }
}