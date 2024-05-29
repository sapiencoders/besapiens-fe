// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import API_SERVER from "../server"

const BlogPost = () => {
  const { blogTitle } = useParams();
  const [blogPost, setBlogPost] = React.useState()
  console.log(blogTitle)

  React.useEffect(() => {
    axios.get(`${API_SERVER}/api/posts?title=${blogTitle}`)
      .then(response => {
        setBlogPost(response.data[0])
        console.log("got post:", response.data)
      })
      .catch(error => {
        console.error("Error fetching blogs:", error)
      });
  }, []);
  
  return (
    <div>
      <h1>{blogPost ? blogPost.title: "Waiting"}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogPost ? blogPost.content : "" }} />
    </div>
  );
};

export default BlogPost;
