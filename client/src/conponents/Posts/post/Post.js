import React from 'react'
import { Card, CardContent, CardMedia, Button, CardActions, Typography } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyle from './styles'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePosts, likePost } from '../../../actions/post';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"))

    const Like = () => {

        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <> <ThumbUpAltIcon fontSize="small" color="primary" />
                        { post.likes.length > 2 ? `You and ${post.likes.length - 1} Others`
                        : `${post.likes.length}  Like${post.likes.length > 1 ? 's' : ''}` }
                    </>
                ): (
                    <> <ThumbUpAltOutlined color="primary" fontSize="small" />
                        {post.likes.length}
                        {post.likes.length === 1 ? 'Like' : 'Likes'}
                    </>
                   )
        }

        return <><ThumbUpAltOutlined fontSize="small" />Like </>

    }

    return (
        <Card className="card" classes={classes.card}>
            <CardMedia children={post.title} title={post.title} image={post.selectedFile} src={post.selectedFile} className={classes.img} />
            <div className={classes.overlay}>
                <Typography variant="h6"> {post.name} </Typography>
                <Typography variant="body2"> {moment(post.createAt).fromNow()} </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button size="small" style={{ color: 'red' }} onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize="large" />
                </Button>
            </div>
            <div className={classes.body}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => ` #${tag}`)}</Typography>
            </div>
            <CardContent>
                <Typography variant="h5" gutterBottom={true} className={classes.title}> {post.message} </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button color="primary" size="small" disabled={!user?.result} onClick={() => { dispatch(likePost(post._id)) }}>
                    <Like />
                </Button>
                
                <Button color="inherit" size="small" onClick={() => { dispatch(deletePosts(post._id)) }}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
