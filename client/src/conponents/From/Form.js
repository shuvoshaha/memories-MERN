import React, { useState } from 'react'
import useStyle from './styles'
import { Typography, Paper, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Filebase from 'react-file-base64'



const Form = () => {
    const [post, setPost] = useState({
        creator: '', title: '', message: '', selectedFile: '', tags: ''
    })

    const classes = useStyle()

    const onSubmitHandler = (e) => [
        e.preventDefault()

    ]
    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={onSubmitHandler}  >
                <Typography variant="h6" className={classes.header} >Create a Memory</Typography>
                <TextField
                    variant="outlined"
                    label="Creator"
                    name="creator"
                    fullWidth value={post.creator}
                    onChange={(e) => setPost({...post, createtor: e.target.value})}
                />

                 <TextField
                    variant="outlined"
                    label="Title"
                    name="title"
                    fullWidth value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                />

                 <TextField
                    variant="outlined"
                    label="Message"
                    name="message"
                    fullWidth value={post.message}
                    onChange={(e) => setPost({...post, message: e.target.value})}
                />

                 <TextField
                    variant="outlined"
                    label="Tags"
                    name="tags"
                    fullWidth value={post.tags}
                    onChange={(e) => setPost({...post, tags: e.target.value})}
                />
                <div className={classes.file}>
                <Filebase 
                  type="file"
                  multiple={false}
                  onDone={(base64) => setPost({ ...post, selectedFile: base64 })}
                />
                </div>

            </form>
        </Paper>
    )
}

export default Form
