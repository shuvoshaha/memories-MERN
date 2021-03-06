import React, {  useState } from 'react';
import { Container, Paper, Typography, Grid, Avatar, Button } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp } from '../../actions/auth'
import useStyle from './styles'


const Auth = () => {
        const classes = useStyle()
        const [showPassword, setShowPassword] = useState(false)

        const history = useHistory();

        const dispatch = useDispatch();

        const initialState = { fname: '', lname: '', email: '', password: '', cpassword: ''  }
        const [formData, setFormData] = useState(initialState)

        // Set form data into state
        const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
        }
        
        const state = useSelector(state => state.auth)

        // Submit data into db using redux
        const handleSubmit = (e) => {
            e.preventDefault();

            console.log(state)
            
            if(isSignup){
                dispatch(signUp(formData, history))
            }
            else{
                dispatch(signIn(formData, history))
            }
        }

        const handleShowPassword = () => {
            setShowPassword((setShowPassword) => !setShowPassword)
        }

        const [isSignup, setIsSignup] = useState(false)

        const switchMood = () => {
            setIsSignup(!isSignup)
        }

        const onSuccessGoogleLogin = async(res) => {
            //if res is exists then give object and use res? something like this
            const result = res ?.profileObj;
            const token = res ?.tokenId
                // console.log(res)
            dispatch({ type: 'AUTH', data: { result, token } })
            history.push('/')
        }

        const onFailureGoogleLogin = (err) => {
            console.log("Something went wrong with google authentication")
        }

        return ( 
      
            <Container component="main" maxWidth="xs">
            <Paper className={classes.card} elevation={3}>
                <Avatar color="seconday">
                    <LockOutLinedIcon />
                </Avatar>
                <Typography className={classes.header} variant="h5">{isSignup ? 'Sign Up' : 'Sign in'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input type="text" label="First Name" handleChange={handleChange} name="fname" half={6} />
                                    <Input type="text" label="Last " handleChange={handleChange} name="lname" half={6} />

                                </>
                            )
                        }
                        <Input label="Email..." handleChange={handleChange} name="email" type="email" xs={12} />
                        <Input label="Password" handleChange={handleChange} name="password" handleShowPassword={handleShowPassword} type={showPassword ? 'text' : 'password'} autoFocus="autoFocus" xs={12} />
                        {isSignup && <Input type="password" name="cpassword" handleChange={handleChange} label="Confirm Password" xs={12} />}
                       
                        {/* Google auth */}
                        <GoogleLogin
                        clientId="1084378585610-l0c7mmj95fgmnshqpt7o1d12estkr5lp.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={onSuccessGoogleLogin}
                        onFailure={onFailureGoogleLogin}
                        render= {renderProps => <Button variant="contained" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Sign in</Button> }  
                        cookiePolicy="single_host_origin"
                        />

                        

                        <Button variant="contained" type="submit" align="center" color="primary">
                            {isSignup ? 'Sign up' : 'Sign in'}
                        </Button>
                    </Grid>
                </form>
                <Grid container justifyContent="flex-end">
                    <Grid>
                        <Button onClick={switchMood}>
                            {isSignup ? 'HAVE AN ACCOUNT! LOGIN' : "DON'T HAVE ACCOUNT! SINGUP"}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
            )
                }

                export default Auth