import React, { useState, useEffect } from 'react'
import useStyle from './styles'
import { Typography, Paper, TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Filebase from 'react-file-base64'
import { makePost } from '../../actions/post'
import { updatePosts } from '../../actions/post'



const Form = ({ currentId, setCurrentId }) => {

    const dispatch = useDispatch()

    const [post, setPost] = useState({
        title: '', message: '', creator: '', tags: '', selectedFile: ''
    })

    // call the state
    const getUpdateDataFromState = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : '')
    console.log(currentId)

    useEffect(() => {
        if (getUpdateDataFromState) {
            setPost(getUpdateDataFromState)
            console.log(getUpdateDataFromState)
        }
    }, [getUpdateDataFromState])

    // create style instance
    const classes = useStyle()

    // Form submit
    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (currentId) {
            dispatch(updatePosts(currentId, post))
        }
        else {
            dispatch(makePost(post))
        }
        clear()
    }

    const clear = () => {
        if (currentId) {
            setCurrentId(0)
        }
        setPost({
            title: '', message: '', creator: '', tags: '', selectedFile: ''
        })
    }
    return (
        <Paper>
            <form autoComplete="off" className={classes.form} noValidate onSubmit={onSubmitHandler}  >
                <Typography variant="h6" className={classes.header} > {currentId ? 'Update' : 'Create'}  a Memory</Typography>
                <TextField
                    variant="outlined"
                    label="Creator"
                    name="creator"
                    fullWidth
                    value={post.creator}
                    onChange={(e) => setPost({ ...post, creator: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Title"
                    name="title"
                    fullWidth
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Message"
                    name="message"
                    fullWidth
                    value={post.message}
                    onChange={(e) => setPost({ ...post, message: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    label="Tags"
                    name="tags"
                    fullWidth
                    value={post.tags}
                    onChange={(e) => setPost({ ...post, tags: e.target.value.split(',') })}
                />
                <div className={classes.file}>
                    <Filebase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
                    />
                </div>

                <Button
                    type="submit"
                    color="primary"
                    style={{ marginBottom: '10px' }}
                    variant="contained" fullWidth>
                    {currentId ? 'Update' : 'Submit'}
                </Button>

                <Button
                    type="reset"
                    color="secondary"
                    onClick={clear}
                    variant="contained"
                    fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form
