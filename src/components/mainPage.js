import * as React from "react"
import axios from "axios"
import API_SERVER from "../server"
import ResponsiveAppBar from "../elements/navBar"
import Banner from "../elements/banner"
import logo from '../static/img/logo-blanco.png'
import BlogList from "./blogList"

const MainPage = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${API_SERVER}/api/posts`)
      .then(response => {
        setBlogs(response.data)
        console.log("got posts:", response.data)
      })
      .catch(error => {
        console.error("Error fetching blogs:", error)
      });
  }, []);

  return <>
    <ResponsiveAppBar />
    <Banner src ={logo} />
    <BlogList blogs={blogs} title={"ÚLTIMAS ENTRADAS"}/>
  </>
}

export default MainPage;