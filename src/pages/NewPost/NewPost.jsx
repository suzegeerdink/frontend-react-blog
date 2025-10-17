import "./NewPost.css"
import React from "react";
import DateCreated from "../../helperfunctions/DateCreated.jsx";
import ReadTime from "../../helperfunctions/ReadTime.jsx";
import { useNavigate } from "react-router-dom";


function NewPost() {
    const navigate = useNavigate();

    const [title, setTitle] = React.useState('');
    const [subtitle, setSubtitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [content, setContent] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        console.log({
            title: title,
            subtitle: subtitle,
            author: author,
            content: content,
            created: DateCreated(new Date()),
            readTime: ReadTime(content),
            comments: 0,
            shares: 0
        });

        navigate("/allposts");
    }

    return (
        <>
            <div className="new-post-page">
                <form onSubmit={onSubmit}>
                    <h1>New Post</h1>
                    <section className="input-fields">
                        <label htmlFor="title">
                            <strong>Title</strong>
                            <input type="text" id="title" name="title" value={title}
                                   onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                        <label htmlFor="subtitle">
                            <strong>Subtitle</strong>
                            <input type="text" id="subtitle" name="subtitle" value={subtitle}
                                   onChange={(e) => setSubtitle(e.target.value)}/>
                        </label>
                        <label htmlFor="author">
                            <strong>Auteur</strong>
                            <input type="text" id="author" name="author" value={author}
                                   onChange={(e) => setAuthor(e.target.value)}/>
                        </label>
                        <label htmlFor="content">
                            <strong>Bericht</strong>
                            <textarea id="content" name="content" value={content}
                                      onChange={(e) => setContent(e.target.value)}
                                      placeholder="What's on your mind?" minLength={300} maxLength={2000}/>
                        </label>
                    </section>
                    <button type="submit"><strong>Verzenden</strong></button>
                </form>
                <footer>
                    <p>footer</p>
                </footer>
            </div>
        </>
    );
}

export default NewPost;