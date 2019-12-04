import React from "react";
import "./style.css";
import { GoOctoface } from "react-icons/go";
import { FaLink } from "react-icons/fa";

function AppCard(props) {
  return (
    <div className="row">
      <div className="card">
        <span className="title">{props.title}</span>
        <img src={props.image} alt="screen shot" className="image"></img>
        <p className="description">{props.description}</p>
        <div className="app-link">
          <a href={props.git} target="blank">
            {" "}
            <GoOctoface />
          </a>
          <a href={props.deploy} target="blank">
            {" "}
            <FaLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
