import React from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import person5 from "../../assets/person5.jpg";

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">From Our Belooved Clients</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency,customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>
          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          <div className="clientsImages flex">
            <img src={person1} alt="" />
            <img src={person2} alt="" />
            <img src={person3} alt="" />
            <img src={person4} alt="" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={person5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
