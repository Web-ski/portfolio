import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';
import Footer from "../../Footer/Footer"


class Webs extends React.Component {
  render() {
    return <div>Webs-site
            <Link to="/">Home</Link>
        <Footer />
    </div>
  }
}

export default Webs;