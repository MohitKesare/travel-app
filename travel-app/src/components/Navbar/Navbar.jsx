import React, { useState } from "react";
import "./Navbar.css";

import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");

  const showNavbar = () => {
    setNavBar("menu showNavbar");
  };
  const removeNavbar = () => {
    setNavBar("menu");
  };
  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>OU-Trips</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
      </div>
      <button className="signUpBtn btn">Sign Up</button>
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
