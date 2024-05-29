import React, { useState } from "react";
import { Container } from "@mui/system";
import { Grid, Pagination } from "@mui/material";
import BasicCard from "../elements/card";

const BlogList = (props) => {
  const [blogs, setBlogs] = useState(props.blogs.slice(0, 10))

  const nextBlogs = (e, value) => {
    setBlogs(props.blogs.slice(10 * (value - 1), 10 * value))
  }

  const getPageCount = () => {
    const minPages = Math.floor(props.blogs.length/10)
    return ((10 * minPages) > props.blogs.length )? minPages : (minPages + 1)
  }

  return <Container maxWidth="md">
    <h1>{props.title}</h1>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 25, lg: 25 }}>
      {blogs.map((b, idx) => 
        <Grid item xs={6} key={idx}>
          <BasicCard blog={b}/>
        </Grid>
      )}
    </Grid>
    <Pagination count={getPageCount()} shape="rounded" size="large" onChange={nextBlogs}/>
  </Container>
}

export default BlogList;