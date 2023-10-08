import React from "react";
import "./Home.css";
import homebg1 from "../../assets/homevideobg.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";
import front1 from "../../assets/front1.jpg";
import front2 from "../../assets/front2.jpg";
import front3 from "../../assets/front3.jpg";
import front4 from "../../assets/front4.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={homebg1} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1>Unlock your travel dreams with us!</h1>
        <p>
          Discover the world's most adventurous nature ,Life is so short for a
          trip
        </p>
        <button className="btn flex">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            <img src={front1} alt="Destination Image" />
            <img src={front2} alt="Destination Image" />
            <img src={front3} alt="Destination Image" />
            <img src={front4} alt="Destination Image" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
