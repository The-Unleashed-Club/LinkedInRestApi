import React from "react";
import CardItem from "../components/CardItem";
import data from "../assets/data/portfolio_data";
import "../styling/portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Portfolio = () => {
  return (
    <>
      <h1>Welcome to Portfolios</h1>
      <div className="flex-container">
        {data.map((curr, ind) => {
          return <CardItem img={curr.image} key={ind} url={curr.link} />;
        })}
      </div>
    </>
  );
};

export default Portfolio;
