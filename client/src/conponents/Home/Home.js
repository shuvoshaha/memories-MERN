import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Posts from '../Posts/Posts';
import Form from '../From/Form'
import { useDispatch } from 'react-redux'
import { getPost } from '../../actions/post';

const Home = () => {
    const [currentId, setCurrentId] = useState(null)

    const dispatch = useDispatch()

    // get post
    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])

    return (
        
            <Container>
                <Grid container spacing={3} alignItems="stretch" justifyContent="space-between">
                    <Grid item xs={12} sm={7}>
                        <Posts currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        

    )
}

export default Home
