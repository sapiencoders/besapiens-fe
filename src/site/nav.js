import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from "../components/mainPage";

const Nav = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </Router>
}

export default Nav;