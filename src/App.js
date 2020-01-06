import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";
import About from './components/About';
import Team from './components/Team';
import Locate from './components/Locate'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import backVid from "./assets/videos/backVid.mp4";

import React, { PureComponent } from "react";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
      headerShow: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll); //scroll event
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <div className="App">

        <NavBar headerShow={this.state.headerShow}></NavBar>
        <Header></Header>
        <Services></Services>
        <About></About>
        <Team></Team>
        <Contact></Contact>
        <Locate></Locate>
        <Footer></Footer>

       
      </div>
    );
  }
}

export default App;
