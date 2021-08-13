import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import useStyle from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyle()
    const [use, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(use)
    const user = null

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div>
            <Typography component={Link} to="/" className={classes.header} align="center" variant="h2">Memories</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.name.chatAt(0)}></Avatar>
                            <Typography className={classes.username} variant="h6">{user.result.name}</Typography>
                            <Button classes={classes.logout} variant="contained" color="secondary">Logout</Button>
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
