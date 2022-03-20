import React, {useState, useEffect} from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const PostManager = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    const add = (post) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => setPosts([...posts, {
                userId: 1,
                id: posts.length + 1,
                title: post.title,
                body: post.body
            }]))
            .catch(err => console.log(err))
    }

    const showPosts = () => {
        posts.sort((a, b) => b.id - a.id);
        return posts.map(post => <li key={post.id} className="list-unstyled">
            <Post post={post}/>
        </li>)
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-4">
                        <h1 style={{marginTop: "20px", textAlign: "center"}}>Post</h1>
                        <AddPost add={add}/>
                        <ul>
                            {showPosts()}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostManager;
