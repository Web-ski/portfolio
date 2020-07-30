import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import './App.css';
import Footer from "../../Footer/Footer";
import { URL_HOME } from "../../../constans";
import StartHeader from '../../Headers/StartHeader';
import Main from '../../Main/Main';

class Home extends React.Component {
  render() {
    console.log(URL_HOME)
    return (
    <Fragment>
      <StartHeader />
      <Main url={ URL_HOME }/>
      <Footer />
    </Fragment>);
  }
}

export default Home;