import React, { useState, useContext, useEffect } from "react";
import { CommentContext } from "../../providers/CommentProvider";
import { PostContext } from "../../providers/PostProvider";
import Comment from './Comment';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function PostComments() {
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    const { getCommentsForPost } = useContext(CommentContext);
    const { getPost } = useContext(PostContext);
    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        const intId = parseInt(id)
        getCommentsForPost(intId).then(setComments);
        getPost(intId).then(setPost);
    }, []);

    const GoBack = () => {
        history.push(`/post/${id}`)
    }

    if (!comments || !post) {
        return null;
    }
    return (
        <>
            <div className="container">
                <h1 className="text-secondary">{post.title}</h1>
                <br />
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
                <Button color="info" onClick={GoBack}>Go Back</Button>
            </div>
        </>
    )
}