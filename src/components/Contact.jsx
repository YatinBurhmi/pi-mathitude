import React, { PureComponent } from 'react'

class Contact extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
reloadpage = () => {
    var returnURL = "http://localhost:3000/" + Math.random() * 100;
    setTimeout(function() 
    {
        window.location=returnURL; 
    }, 50 );
}

    render() {
        return (
            <div>
            <section className="page-section" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form  className="gform" id="contactForm" 
                  dataEmail = "yatinburhmi@gmail.com"
                  method="POST" 
                  action="https://script.google.com/macros/s/AKfycbwEgtnJA5TvHKOpfDvpeNyeF9s0AdIXkXcH1c8y/exec" 
                 >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                          <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <input className="form-control" id="email" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                          <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <input className="form-control" id="phone" name="color" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <textarea className="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div style={{display:"none"}} className="thankyou_message">
       {/* <!-- You can customize the thankyou message by editing the code below --> */}
       <h2><em>Thanks</em> for contacting us! We will get back to you soon!
       </h2>
      </div>
          </section>
          </div>
        )
    }
}

export default Contact