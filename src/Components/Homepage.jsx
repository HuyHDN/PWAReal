import React, { Component } from 'react';
import '../style.css';
import PropertyDetails from '../Component/PropertyDetails';
import Intro from '../Component/Intro.js';
import PropertyLists from '../Component/PropertyList'
import HomepageMain from '../Component/HomepageMain';
import Update from '../Component/Update.js';
import Delete from '../Component/Delete.js';
import Login from '../Component/Login.js'
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
        <main id="main">
          <Router>
            <Switch>
              <Route exact path="/" component={HomepageMain}></Route>
              <Route path="/about" component={Intro}></Route>
              <Route path="/property-grid" component={PropertyLists}></Route>
              <Route path="/details/:id" component={PropertyDetails}></Route>
              <Route path="/blog-grid">
                <Update />
                <Delete />
              </Route>
              <Route path="/login" component={Login}>
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
        );
    }
}