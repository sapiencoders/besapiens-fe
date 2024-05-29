import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogPost from "../components/blogPost";
import MainPage from "../components/mainPage";

const Nav = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:blogTitle" element={<BlogPost />} />
    </Routes>
  </Router>
}

export default Nav;