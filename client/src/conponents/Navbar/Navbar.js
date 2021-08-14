import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import useStyle from './styles'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const classes = useStyle()
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()

    const history = useHistory()
    const location = useLocation()

    const logout = () =>{
        setUser(null);
        history.push('/')
        dispatch({ type: 'LOGOUT' })
    }
    
    useEffect(() => {
       const token = user?.token;
       
       setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div>
            <Typography component={Link} to="/" className={classes.header} align="center" variant="h2">Memories</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl ? user.result.imageUrl : user.result.name.charAt(0)}></Avatar>
                            <Typography className={classes.username} variant="h6">{user.result.name}</Typography>
                            <Button classes={classes.logout} variant="contained" onClick={logout} color="secondary">Logout</Button>
                        </div>
                    ) :
                    (
                        <Button color="primary" component={Link} to="/auth" variant="contained" className={classes.login}>
                             Login
                        </Button>
                    )
                }
            </Toolbar>

        </AppBar>
    )
}

export default Navbar
