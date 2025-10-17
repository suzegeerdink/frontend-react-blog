import "./AllPosts.css";
import posts from '../../constants/data.json';
import { Link } from "react-router-dom";

function AllPosts() {
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
            <footer>
                <p>Scroll weer naar boven!</p>
            </footer>
        </>
    );
}

export default AllPosts;