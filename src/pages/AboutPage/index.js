import React from "react";
import "./style.css";
import {
  DiBootstrap,
  DiCss3,
  DiFirebase,
  DiGit,
  DiHeroku,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiNpm,
  DiReact
} from "react-icons/di";

const AboutPage = props => {
  return (
    <div className="info">
      <p>
        Hello, welcome to my portfolio. I am a full stack developer and
        javascript engineer. I graduated from the UPenn/Trilogy Bootcamp, an
        immersive 24 week program. I enjoy challenges and am an excellent
        problem solver. I work well independently and as a team member.
      </p>
      <p>
        An extensive career in the hospitality industry provides me with a
        diverse and unique skill set. Communication, consistency and time
        management are just a few. I am a valuable asset in any work
        environment.
      </p>
      <p>
        I am looking to strengthen my current skills and develop new
        proficiencies in an environment that promotes growth and provides
        opportunities.
      </p>

      <div className="technologies">
        <DiBootstrap /> <DiCss3 /> <DiFirebase /> <DiGit /> <DiHeroku />{" "}
        <DiHtml5 /> <DiJavascript /> <DiMongodb /> <DiMysql /> <DiNodejs />{" "}
        <DiNpm /> <DiReact />
      </div>
    </div>
  );
};

export default AboutPage;
