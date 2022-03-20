import React from "react";
import style from "./scss/comment.module.scss";

const Comment = ({comment}) => {
    const {single_comment} = style;

    return (
        <div className={single_comment}>
            <h4>{comment.name}</h4>
            <h6>{comment.email}</h6>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;