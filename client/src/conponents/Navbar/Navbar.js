import { Typography, Toolbar } from '@material-ui/core'
import React from 'react'
import useStyle from './styles'

const Navbar = () => {
    const clasess = useStyle()
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.header} align="center" variant="h2">Memories</Typography>
        </AppBar>
    )
}

export default Navbar
