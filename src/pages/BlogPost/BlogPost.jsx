import "./Blogpost.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import DateCreated from "../../helperfunctions/DateCreated.jsx";
import axios from "axios";


function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    async function fetchBlogpostId() {
        try {
            const response = await axios.get(`/api/blogposts/${id}`, {
                headers: {
                    'novi-education-project-id': 'add5f476-7fd6-45e3-93ca-5f4fcd9f9392',
                },
            });
            setPost(response.data);
            setLoading(false);
        } catch (e) {
            console.error(e)
            setLoading(false);
        }
    }

        fetchBlogpostId();
    }, [id]);

    if (loading) return <p className="loading-container">Loading...</p>;
    if (!post) return <div>Post not found</div>;

    return (
        <>
            <div className="page">
                <div className="container">
                    <section className="blogpost">
                        <h1>{post.title}</h1>
                        <h2>{post.subtitle}</h2>
                        <p>Geschreven door {post.author} op {DateCreated(post.created)}</p>
                        <p className="small-font">{post.readTime} minuten lezen</p>
                        <p>{post.content}</p>
                        <p className="small-font">{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </section>
                    <ul>
                        <li className="overzicht"><NavLink to="/allposts"><strong> Terug naar
                            overzicht</strong></NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BlogPost;