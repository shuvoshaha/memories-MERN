import React from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'

const Posts = () => {

    const state = useSelector(state => state.posts)
    console.log(state)

    return (
        <div className="posts">
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts
