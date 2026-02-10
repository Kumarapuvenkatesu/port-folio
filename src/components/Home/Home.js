import React from 'react';
import { Button } from "@mui/material";
import {Helmet} from "react-helmet";
import ChatBot from "../chat-bot";

const Home=()=>{

    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/React_3-project_Venkatesu.pdf";
      link.download = "Kumarapu_Venkatesu_Resume.pdf";
      link.click();
  };
    return (

         <div className="home-container">
          <Helmet>
            <title>Home-portfolio</title>
            <meta name="description" content="Home-route" />
          </Helmet>
      <div className="home-content">
          <ChatBot/>
        <h3>
          Hi <span role="img" aria-label="wave" className="hand">&#128075;</span>
        </h3>
        <h1>
          I'm Venkatesu.<br />
          I'm a{" "}
          <span className="text-animation" style={{"--i":4}} data-text="React JS Developer">React JS Developer</span>
          {/* <span className="text-animation" style={{"--i":3}} data-text="Web Developer">Web Developer</span>
          <span className="text-animation" style={{"--i":2}} data-text="Front End Developer">Front End Developer</span>
          <span className="text-animation" style={{"--i":1}} data-text="UI Developer">UI Developer</span> */}
        </h1>
        <p>
          This is the home page where you can find information about my projects and skills.
        </p>
        <Button className="download-button" onClick={handleDownload}>
          Download CV
        </Button>
      </div>
      <div className="home-image">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              fill="#1fda5a"
            />
            <image
              x="52"
              y="45"
              width="300"
              className="home__blob-img"
              href="https://res.cloudinary.com/dkce9fjcw/image/upload/v1752239043/venkatesu_photo_lvvhxk.png"
            />
          </g>
        </svg>
      </div>
    </div>
    );
}
export default Home;
