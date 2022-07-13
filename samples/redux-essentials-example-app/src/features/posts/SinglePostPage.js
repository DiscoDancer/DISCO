import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import {PostAuthor} from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {selectPostById} from "./postsSlice";

export const SinglePostPage = ({match}) => {
    const {postId} = match.params

    const post = useSelector(state => selectPostById(state, postId))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const date = (new Date()).toISOString();

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
                <PostAuthor/>
                <TimeAgo timestamp={date}/>
            </article>
        </section>
    )
}