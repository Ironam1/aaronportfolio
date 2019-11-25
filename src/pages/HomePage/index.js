import React from "react";
import "./style.css";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { GoFile } from "react-icons/go";

const HomePage = props => {
  return (
    <div className="home">
      <div className="intro">Aaron MacInnis</div>

      <div className="titles">
        Full Stack Developer <br></br>Javascript Engineer
      </div>

      <div className="links">
        <a
          href="https://www.linkedin.com/in/aaron-macinnis/"
          rel="noopener noreffer"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://drive.google.com/open?id=1Q6zUhLGFYt88FJ2qyKz5U1MYjbuiOOZ1wF6l-urUF_w"
          rel="noopener noreffer"
          target="blank"
        >
          <GoFile />
        </a>
        <a
          href="https://github.com/Ironam1"
          rel="noopener noreffer"
          target="blank"
        >
          <FaGithubAlt />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
