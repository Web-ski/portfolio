import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';
import Footer from "../Footer/Footer"
import SecondHeader from '../Headers/SecondHeader'

class CV extends React.Component {
  render() {
    return <div>CV-site
        <SecondHeader />
      <Footer />
    </div>
  }
}

export default CV;