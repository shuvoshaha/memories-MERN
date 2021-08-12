import React from 'react'
import { InputAdornment, TextField, Grid, IconButton } from '@material-ui/core'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

const Input = ({ name, half, handleChange, handleShowPassword, label, type }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                fullWidth
                required
                type={type}
                label={label}
                variant="outlined"
                // inputProps={name === 'password' ? {
                //     endAdornment: (
                //         <InputAdornment position='end'>
                //             <IconButton onClick={handleShowPassword}>
                //                 {type === 'password' ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                //             </IconButton>
                //         </InputAdornment>
                //     )
                // } : '' }
            />
        </Grid>
    )
}

export default Input
