import React, { Component } from 'react';
import PropertyDetails from './PropertyDetails';
import SearchBar from './SearchBar';
import Navbar from './Navbar.js';
import Intro from './Intro.js';
import Service from './Service';
import LatestProps from './LatestProps';
import Agents from './Agents';
import Testimonial from './Testimonials';
import LatestNews from './LatestNews';
import Footer from './FooterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class HomepageMain extends Component {
  useScript = (url, script) => {
    // const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
  };
  componentDidMount(){
    const script = document.createElement("script");
    this.useScript("./public/assets/js/main.js", script);
  };
    render() {
        return (
          <div>
            <div>
              <div className="click-closed" />
              <SearchBar />
              <Navbar />
              <main id="main">
              <Intro />
              <Service/>
              <LatestProps />
              <Agents />
              <LatestNews />        
              <Testimonial />         
              </main>
              <Footer />
              <a href="#" className="back-to-top">
                <i className="fa fa-chevron-up" />
              </a>
            </div>
          </div>
        );
    }
}
