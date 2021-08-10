import React from 'react'
import {  Card, CardContent, CardMedia, Button, CardActions, Typography } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import  DeleteIcon  from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyle from './styles'
import moment from 'moment'
import { deletePosts } from '../../../actions/post';
import { useDispatch } from 'react-redux'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyle()
    const dispatch = useDispatch()

    return (
        <Card className="card" classes={classes.card}>
            <CardMedia children={post.title} title={post.title}  image={post.selectedFile} src={post.selectedFile} className={classes.img} />
            <div className={classes.overlay}>
                <Typography variant="h6"> {post.creator} </Typography>
                <Typography variant="body2"> {moment(post.createAt).fromNow()} </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button size="small" style={{ color: 'red' }} onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="large" />
                </Button>
            </div>
            <div className={classes.body}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <CardContent>
                <Typography variant="h5" gutterBottom={true} className={classes.title}> {post.message} </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button color="primary" size="small" onClick={() => {}}>
                    <ThumbUpIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button color="inherit" size="small" onClick={() =>{dispatch(deletePosts(post._id))}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
