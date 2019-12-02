import React from "react";
import "./style.css";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { GoFile, GoMail } from "react-icons/go";

const HomePage = props => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Aaron MacInnis</h1>
      </div>

      <div className="titles">
        <h3> Full Stack Developer </h3>
        <h3>Javascript Engineer</h3>
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
        <a href="mailto:https://Ironam1@icloud.com" target="blank">
          <GoMail />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
