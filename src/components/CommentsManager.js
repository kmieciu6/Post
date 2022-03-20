import React, {useState, useEffect} from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentsManager = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data => setComments(data))
    }, [])

    const add = (comment) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => setComments([...comments, {
                postId: 1,
                id: comment.length + 1,
                name: comment.name,
                email: comment.email,
                body: comment.body
            }]))
            .catch(err => console.log(err))
    }

    const showComments = () => {
        comments.sort((a, b) => b.id - a.id);
        return comments.map(comment => <li key={comment.id} className="list-unstyled">
            <Comment comment={comment}/>
        </li>)
    }

    return (
        <div>
            <AddComment add={add}/>
            <ul>
                {showComments()}
            </ul>
        </div>
    )
}

export default CommentsManager;
