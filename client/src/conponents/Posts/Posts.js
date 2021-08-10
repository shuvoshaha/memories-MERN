import React from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'


const Posts = ({ currentId, setCurrentId }) => {

    const posts = useSelector(state => state.posts)

    return (

        !posts.length ? <CircularProgress /> :
            <Grid className="container" container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => {
                      return(
                        <Grid key={post._id} xs={12} sm={6} item>
                        <Post post={post} currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                      )
                    })
                }
            </Grid>


    )
}

export default Posts
