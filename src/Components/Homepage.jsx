import React, { Component } from 'react';
import '../style.css';

import SearchBar from '../Component/SearchBar';
import Navbar from '../Component/Navbar.js';
import Intro from '../Component/Intro.js';
import Service from '../Component/Service';
import LatestProps from '../Component/LatestProps';
import Agents from '../Component/Agents';
import Testimonial from '../Component/Testimonials';
import LatestNews from '../Component/LatestNews';
import PropertyLists from '../Component/PropertyList';
import Update from '../Component/Update.js';
import Delete from '../Component/Delete.js';
import Login from '../Component/Login.js'
import Footer from '../Component/FooterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class Homepage extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "../js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
      <div>
        <div className="click-closed" />
        <SearchBar />
        <Navbar />
        <main id="main" style={{paddingTop: "100px"}}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Intro /> 
                <Service />
                <LatestProps />
                <Agents />
                <LatestNews />
                <Testimonial />
              </Route>
              <Route path="/about">
                <Intro />
              </Route>
              <Route path="/property-grid">
                <PropertyLists />
              </Route>
              <Route path="/blog-grid">
                <Update />
                <Delete />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
        );
    }
}