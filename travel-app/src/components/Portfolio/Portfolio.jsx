import React from "react";
import "./Portfolio.css";
import protection from "../../assets/protection.png";
import diverse from "../../assets/diverselocation.gif";
import support from "../../assets/support.png";
import gridimage from "../../assets/gridimage.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why should you choose us?</h3>
            <p>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={protection} alt="" />
              </div>
              <div className="infor">
                <h4>Safety and support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={diverse} alt="" />
              </div>
              <div className="infor">
                <h4>Diverse range of Destinations</h4>
                <p>
                  Weather it's a domestic tour or a international adventure,We
                  cover a wide range of destinations to cate a different
                  interests and preferences.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={support} alt="" />
              </div>
              <div className="infor">
                <h4>24/7 customer support</h4>
                <p>
                  Our dedicated customer support team is available round the
                  clock to address any queies or concerns before,during and
                  after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent">
          <img src={gridimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
