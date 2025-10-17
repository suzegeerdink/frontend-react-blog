import "./Blogpost.css"
import {useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import {NavLink} from 'react-router-dom';
import DateCreated from "../../helperfunctions/DateCreated.jsx";


function BlogPost() {
    const {id} = useParams();
    const number = parseInt(id);
    let post;

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === number) {
            post = posts[i];
            break;
        }
    }

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
                <footer>
                    <p>footer</p>
                </footer>
            </div>
        </>
    );
}

export default BlogPost;