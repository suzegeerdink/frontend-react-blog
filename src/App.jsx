import './App.css'
import { Routes, Route } from 'react-router-dom';
import logo from './assets/logo-white.png'
import AllPosts from "./pages/AllPosts/AllPosts.jsx";
import Homepagina from "./pages/Homepagina/Homepagina.jsx";
import NewPost from "./pages/NewPost/NewPost.jsx";
import NotFoundPagina from "./pages/NotFoundPagina/NotFoundPagina.jsx";
import Navigation from "./components/Navigation.jsx";
import BlogPost from "./pages/BlogPost/BlogPost.jsx";
import React from "react";

function App() {
    return (
        <>
            <Navigation />
            {/*<div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
        </div>*/}

    <main>
        <Routes>
            <Route path="/" element={<Homepagina />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/blogpost/:id" element={<BlogPost/>} />
            <Route path="*" element={<NotFoundPagina />} />
        </Routes>
    </main>
            <footer>
                <p>footer</p>
            </footer>
        </>
    );
}

export default App
