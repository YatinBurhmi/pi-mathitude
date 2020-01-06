import React from "react";

export default function Locate() {
  return (
    <section className="page-section" id="locate">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Locate Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-12 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.973327835974!2d77.32812595027882!3d28.359655982440543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7f9750fb69%3A0xae0cee15132b28e6!2sMathitude%20India!5e0!3m2!1sen!2sin!4v1577777698721!5m2!1sen!2sin"
              width="800"
              height="600"
              frameborder="0"
              style={{
                border: "0",
                alignItems: "center"
              }}
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
