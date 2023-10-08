import React from "react";
import "./Questions.css";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Accordian = ({ title, description, active, setActive }) => {
  return (
    <div className="accordianContainer">
      <span className="title flex">
        {title}
        <span onClick={() => setActive(title)}>
          {active === title ? (
            <BsArrowUpCircle className="icon" />
          ) : (
            <BsArrowDownCircle className="icon" />
          )}
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " description"}>
        {description}
      </p>
    </div>
  );
};

export default Accordian;
