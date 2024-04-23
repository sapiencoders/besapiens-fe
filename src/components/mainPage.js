import * as React from "react"
import ResponsiveAppBar from "../elements/navBar";
import Banner from "../elements/banner";
import logo from '../static/img/logo-blanco.png';
import BlogList from "./blogList";

const MainPage = () => {
  const blogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 7588, 6786, 87]
  return <>
    <ResponsiveAppBar />
    <Banner src ={logo} />
    <BlogList blogs={blogs} title={"ÚLTIMAS ENTRADAS"}/>
  </>
}

export default MainPage;