import React, { Component } from 'react';
import Intro from './Intro';
import LatestNews from './LatestNews';
import LatestProps from './LatestProps';
import FooterPage from './FooterPage';
import Agents from './Agents';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import PropertyDetails from './PropertyDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class Homepage extends Component {
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
              {/* ======= Property Search Section ======= */}
              <div className="click-closed" />
              {/*/ Form Search Star /*/}
              <SearchBar />
              {/* End Property Search Section */}
              {/* ======= Header/Navbar ======= */}
              <Navbar />
              {/* End Header/Navbar */}
              {/* ======= Intro Section ======= */}
              
              {/* End Intro Section */}
              <main id="main">
              <Intro />
                
              <LatestProps />
                     
              <Agents />
                      
              <LatestNews />
                     
              </main>
              {/* End #main */}
              {/* ======= Footer ======= */}
              <FooterPage />
              {/* End  Footer */}
              <a href="#" className="back-to-top">
                <i className="fa fa-chevron-up" />
              </a>
              <div id="preloader" />
              {/* Vendor JS Files */}
              {/* Template Main JS File */}
            </div>
          </div>
        );
    }
}
