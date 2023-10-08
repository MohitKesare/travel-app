import React from "react";
import "./Subscribe.css";
import ladyCalling from "../../assets/ladyCalling.jpg";

const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={ladyCalling} alt="" />
        <div className="textDiv">
          <h4>Best way to start your journey!</h4>
          <p>
            We offer personalized itineraries tailored to individual preferences
            and interests.
          </p>
          <button className="btn">Start here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
