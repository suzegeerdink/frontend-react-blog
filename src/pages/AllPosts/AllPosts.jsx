import "./AllPosts.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";


function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchBlogposts() {
            try {
                const response = await axios.get('/api/blogposts', {
                    headers: {
                        'novi-education-project-id': 'add5f476-7fd6-45e3-93ca-5f4fcd9f9392',
                    }
                });
                setPosts(response.data);
            } catch (e) {
                console.error(e)
            }
        }
        fetchBlogposts();
        }, []); // [] zorgt ervoor dat fetchBlogPost alleen 1 keer op de pagina laadt.


    return (
        <>
            <header>
                <h1>Bekijk alle {posts.length} posts op het platform</h1>
            </header>
            <main className="container-blogposts">
                {posts.map((post) => (
                    <div className="blog-posts-by-one" key={post.id}>
                        <p><Link to={`/blogpost/${post.id}`}><strong>{post.title}</strong></Link> ({post.author})</p>
                        <p className="small-font">{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </div>
                ))}
            </main>
        </>
    );
}

export default AllPosts;