import React, {useState} from "react";
import style from "./scss/addComment.module.scss";

const AddComment = ({add}) => {
    const {comment_form, form_group, textarea, input, button} = style;

    const [form, setForm] = useState({name: "", email: "", body: ""});

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (<form className={comment_form}>
        <div className={form_group}>
            <h3>Leave comment</h3>
            <label htmlFor="name">Name:
                <input type="text" name="name" className={input} value={form.name} onChange={handleChange}/>
            </label>
            <label htmlFor="email">Email:
                <input type="text" name="email" className={input} value={form.email} onChange={handleChange}/>
            </label>
            <label htmlFor="body">Message:</label>
            <textarea name="body" rows="4" className={textarea} value={form.body}
                      onChange={handleChange}/>
            <input type="submit" value="Add" className={button} onClick={e => {
                e.preventDefault();
                add(form)
            }}/>
        </div>
    </form>)
}

export default AddComment;