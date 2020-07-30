import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';
import Footer from "../../Footer/Footer"


class UI extends React.Component {
  render() {
    return <div>UI-site
            <Link to="/">Home</Link>
        <Footer />
    </div>
  }
}

export default UI;