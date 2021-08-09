import React from 'react'
import { Container, Grid, Card, CardContent, CardMedia, Typograpgy, Button, CardActions, Typography } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import  DeleteIcon  from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyle from './styles'
import moment from 'moment'

const Post = ({ posts }) => {
    const classes = useStyle()

    return (
        <Card className="card" classes={classes.card}>
            <CardMedia  image={posts.selectedFile} title={posts.title} className={classes.img} />
            <div className={classes.overlay}>
                <Typography variant="h6"> {posts.creator} </Typography>
                <Typography variant="body2"> {moment(posts.createAt).fromNow()} </Typography>
            </div>
        </Card>
    )
}

export default Post
