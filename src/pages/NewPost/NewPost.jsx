import "./NewPost.css"
import React from "react";
import ReadTime from "../../helperfunctions/ReadTime.jsx";
import DateCreated from "../../helperfunctions/DateCreated.jsx";
import axios from "axios";
import { NavLink } from "react-router-dom";


function NewPost() {

    const [title, setTitle] = React.useState('');
    const [subtitle, setSubtitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [content, setContent] = React.useState('');

    const [submittedPost, setSubmittedPost] = React.useState(null);
    const [error, setError] = React.useState(null);

    async function onSubmit(e) {
        e.preventDefault();

        // ik kreeg de hele URL niet werkend bij axios.post(url) dus heb ik wat aangepast in de map vite.convig.js.

        try {
            const response = await axios.post('/api/blogposts', {
                "title": title,
                "subtitle": subtitle,
                "author": author,
                "content": content,
                "created": new Date().toISOString(),
                "readTime": ReadTime(content),
                "comments": 0,
                "shares": 0
            }, {
                headers: {
                    'novi-education-project-id': 'add5f476-7fd6-45e3-93ca-5f4fcd9f9392',
                    'Content-Type': 'application/json',
                },
            });

            setSubmittedPost(response.data);
            setError(null);

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div className="new-post-page">
                {!submittedPost ? (
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
                        <button type="submit" disabled={
                            !title.trim() || !subtitle.trim() || !author.trim() || !content.trim()
                        }><strong>Verzenden</strong></button>
                        {error && <p>something went wrong</p>}
                    </form>
                ) : (
                    <div className="succes-message">
                    <p>Your post <strong>{submittedPost.title}</strong> has been successfully submitted!</p>
                    <NavLink to={`/blogpost/${submittedPost.id}`}>Click here to see it!</NavLink>
                    </div>
                )}
            </div>
        </>
    );
}

export default NewPost;