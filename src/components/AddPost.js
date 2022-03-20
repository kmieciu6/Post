import React, {useState} from "react";
import style from "./scss/addPost.module.scss"

const AddPost = ({add}) => {
    const {post_form, form_group, title_input, textarea, button} = style;

    const [form, setForm] = useState({title: "", body: ""});

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <form className={post_form}>
            <div className={form_group}>
                <h3>Add post</h3>
                <label htmlFor="title">Title:
                    <input type="text" name="title" className={title_input} value={form.title} onChange={handleChange}/>
                </label>
                <label htmlFor="body">Message:</label>
                <textarea name="body" rows="4" className={textarea} value={form.body}
                          onChange={handleChange}/>
                <input type="submit" value="Add" className={button} onClick={e => {
                    e.preventDefault();
                    add(form)
                }}/>
            </div>
        </form>
    )
}

export default AddPost;