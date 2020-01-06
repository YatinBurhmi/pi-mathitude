import React from "react";

export default function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              MATHEMATICS TUITION CLASS
            </h2>
            <h3 className="section-subheading text-muted">
              We Prepare Students For
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-book fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Board Exams</h4>
            <p className="text-muted">
              Class 11 and Class 12 <br></br>with Special Test-Series for Class
              12.{" "}
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">IIT-JEE Mains &amp; Advance </h4>
            <p className="text-muted">
              Concept Oriented Teaching for handling complex questions &amp;
              tricks to solve objective questions.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-graduation-cap fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">College Level Mathematics</h4>
            <p className="text-muted">
              Advance Mathematics for College Students to make them understand
              the core concepts that will help them in professional world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
