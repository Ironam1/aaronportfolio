import React from "react";
import "./style.css";
import AppCard from "../../components/AppCard";
const PortfolioPage = props => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>
      <div className="headline">
        <p>Here are a few of my favorite applications!</p>
      </div>
      <div className="app-cards">
        {props.apps.map(apps => (
          <AppCard
            id={apps.id}
            key={apps.id}
            title={apps.title}
            image={apps.image}
            git={apps.git}
            deploy={apps.deploy}
            description={apps.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;