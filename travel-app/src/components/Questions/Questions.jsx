import React, { useState } from "react";
import "./Questions.css";
import Accordian from "./Accordian";

const Questions = () => {
  const [active, setActive] = useState(
    "How do I choose a right travel destination for me?"
  );

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordian grid">
          <Accordian
            title=" How do I choose a right travel destination for me?"
            description="Consider your interests , budget , desired experiences , and the type of
        environment you enjoy.Research destinations that align with your
        preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />
          <Accordian
            title="What are the best times to visit specific destinations?"
            description="Research the climate, weather patterns, and peak tourist seasons of the destination you're interested in . Opt for the shoulder seasons when the weather is pleasant , and crowds are fewer,if posiible."
            active={active}
            setActive={setActive}
          />
          <Accordian
            title="How can I find budget-friendly travel options and deals?"
            description="Look for travel deals , discounts on flights and accomodations, and consider using travel apps or websites that offer competetive prices.Being flexible with your travel dates can also help you find better deals."
            active={active}
            setActive={setActive}
          />
          <Accordian
            title="What essential Items should I pack for my adventure?"
            description="Pack appropriate cloting ,toiletries, travel documents (passport,visa etc.), essential medications, and any specific gear needed for your adventure (e.g. hiking Boots, snorkeling gear )."
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h3>Do you have any specific questions?</h3>
            <p>
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>
          <div className="formContent grid">
            <input type="email" placeholder="Enter Email Address" />
            <textarea placeholder="Enter your question here.."></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
