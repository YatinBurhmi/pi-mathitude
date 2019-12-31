
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'
import backVid from './assets/videos/backVid.mp4'

import React, { PureComponent } from 'react'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      drawerOpen : false,
        headerShow: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll) //scroll event
}

handleScroll = ()=>{
  if(window.scrollY>0){
      this.setState({
          headerShow: true
      })
  }else{
      this.setState({
          headerShow: false
      })
  }
}
toggleDrawer = (value) => {
this.setState({
  drawerOpen: value
})
}


  render() {
    return (
      <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav"
      style ={{
        backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
        paddingTop: this.state.headerShow ?'0px' : '25px',
        paddingBottom:this.state.headerShow ?'0px' : '25px'
      }}
    >
      <div className="container"
        
        >
        <a className="navbar-brand js-scroll-trigger" href="#page-top"> &pi; Mathitude</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To Our Institute</div>
          <div className="intro-heading text-uppercase">Where Maths Is Fun!</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
      </div>
    </header>
  
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">MATHEMATICS TUITION CLASS</h2>
            <h3 className="section-subheading text-muted">We Prepare Students For</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-book fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Board Exams</h4>
            <p className="text-muted">Class 11 and Class 12 <br></br>with Special Test-Series for Class 12. </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">IIT-JEE Mains &amp; Advance </h4>
            <p className="text-muted">Concept Oriented Teaching for handling complex questions &amp; tricks to solve objective questions.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-graduation-cap fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">College Level Mathematics</h4>
            <p className="text-muted">Advance Mathematics for College Students </p>
          </div>
        </div>
      </div>
    </section>
  
  
  
  
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Our Ideology</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Focus on Core Concepts</h4>
                    {/* <h4 className="subheading">Our Humble Beginnings</h4> */}
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">We believe </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Individual Attention</h4>
                    {/* <h4 className="subheading">An Agency is Born</h4> */}
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Test Series</h4>
                    {/* <h4 className="subheading">Phase Two Expansion</h4> */}
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part
                    <br/>Of Our
                    <br/>Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
              <h4>Kay Garland</h4>
              <p className="text-muted">Lead Designer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
              <h4>Larry Parker</h4>
              <p className="text-muted">Lead Marketer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
              <h4>Diana Pertersen</h4>
              <p className="text-muted">Lead Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>
  
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  
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
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
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
    </section>
  
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Your Website 2019</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  
  
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="" />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="" />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Explore</li>
                    <li>Category: Graphic Design</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="img/portfolio/03-full.jpg" alt="" />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Finish</li>
                    <li>Category: Identity</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="img/portfolio/04-full.jpg" alt="" />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Lines</li>
                    <li>Category: Branding</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="img/portfolio/05-full.jpg" alt="" />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Southwest</li>
                    <li>Category: Website Design</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="img/portfolio/06-full.jpg" alt="" />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Window</li>
                    <li>Category: Photography</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>
  
    <script src="js/agency.min.js"></script>
      </div>
    );
  }
}

export default App;
