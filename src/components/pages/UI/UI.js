import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';
import Footer from "../../Footer/Footer"
import SecondHeader from '../../Headers/SecondHeader'

class UI extends React.Component {
  render() {
    return <div>UI-site
            <SecondHeader />
        <Footer />
    </div>
  }
}

export default UI;