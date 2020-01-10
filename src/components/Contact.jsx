import React, { PureComponent } from "react";

class Contact extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    displayThankYou : 'none'
  }
setHi = (event) => {
  console.log("event",event)
  this.setState({
    displayThankYou: 'block'
  })
  setTimeout(
    function() {
        this.setState({ displayThankYou : 'none'});
    }
    .bind(this),
    5000
);
}


  render() {
    return (
      <div>
        <section className="page-section" id="contact">
          <iframe
            name="hiddenFrame"
            style={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              width: "1px",
              height: "1px;"
            }}
          ></iframe>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted"  style={{color:'white'}}>
                  Please provide your Contact Details.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form
                  className="gform"
                  id="contactForm"
                  dataEmail="yatinburhmi@gmail.com"
                  method="POST"
                  action="https://script.google.com/macros/s/AKfycbx9QtrqPegE1ZRIUGlsojIbso_voCPZhVBJxyfDqZej6O3Asv8/exec"
                  target="hiddenFrame"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your Email *"
                          required="required"
                          data-validation-required-message="Please enter your email address."
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          name="mobile"
                          type="tel"
                          placeholder="Your Phone *"
                          required="required"
                          data-validation-required-message="Please enter your phone number."
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Your Message *"
                          required="required"
                          data-validation-required-message="Please enter a message."
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                        onClick = {this.setHi}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>

      </div>
          <div style={{ display: this.state.displayThankYou, color:'white', marginTop:'4em' }} className="thankyou_message">
            {/* <!-- You can customize the thankyou message by editing the code below --> */}
            <h2>
              <em>Thanks</em> for contacting us! We will get back to you soon!
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
