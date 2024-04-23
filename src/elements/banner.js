import { Container } from "@mui/system";
import React from "react";

const Banner = (props) => {
  return <Container fixed sx={{borderBottom: "1px solid black"}} maxWidth="lg">
    <img src={props.src} style={{objectFit: "cover", height: "320px"}} />
  </Container>
}

export default Banner;