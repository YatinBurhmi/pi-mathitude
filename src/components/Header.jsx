import React from "react";

export default function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To Our Institute</div>
          <div className="intro-heading text-uppercase">
            Where Maths Is Fun!
          </div>
          <a
            className=" btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </div>
    </header>
  );
}
