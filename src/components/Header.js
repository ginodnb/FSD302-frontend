import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home";
import Profile from "./Profile";
import "../styles/Header.css";
import Api from "./Api";
import ErrorPage from "./ErrorPage";


function Header() {
  return (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="api">api</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='profile/:username' element={<Profile />}/>
            <Route path='api' element={<Api />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <footer>footer component</footer>


    </Router>
  )
}

export default Header;