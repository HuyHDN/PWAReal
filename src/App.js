import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
// import './Component/custom.css'
import './public/assets/vendor/ionicons/css/ionicons.min.css';
import './public/assets/vendor/ionicons/css/ionicons.css';
import './public/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './public/assets/vendor/owl.carousel/assets/owl.carousel.css';
import './public/assets/vendor/owl.carousel/assets/owl.theme.default.css';
import './public/assets/vendor/owl.carousel/assets/owl.theme.default.min.css';
import './public/assets/vendor/owl.carousel/assets/owl.theme.green.css';
import './public/assets/vendor/owl.carousel/assets/owl.theme.green.min.css';
import './public/assets/css/style.css';
import './public/assets/vendor/animate.css/animate.min.css';
import './public/assets/vendor/bootstrap/css/bootstrap.min.css';
import './Component/custom.css';
import Homepage from './Component/Homepage';
import PropertyList from './Component/PropertyList';
import PropertyDetails from './Component/PropertyDetails';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" render={()=> <Homepage/>}/>
        <Route path="/List" render={()=> <PropertyList/>}/>
        <Route path="/Details" render={()=> <PropertyDetails/>}/>
      </Switch>
    </BrowserRouter>
       
      {/* Browsing in ReactJS */}
    </div>
  );
}

function useScript(src) {
  const [ status, setStatus ] = useState(src ? "loading" : "idle");
}

export default App;
