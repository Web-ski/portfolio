import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';
import Footer from "../../Footer/Footer"

class Home extends React.Component {
  render() {
    return <div className="home">
      Home-site
      <Footer />
    </div>;
  }
}

export default Home;