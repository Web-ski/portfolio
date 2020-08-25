import React from 'react';
import './UI.scss';
import Footer from "../Footer/Footer"
import SecondHeader from '../Headers/SecondHeader';
import { URL_UI } from "../../constans";
import SecondMain from '../Main/SecondMain';
import BackTopBtn from '../Buttons/BackTopBtn';

class UI extends React.Component {
  render() {
    return <div>
      <SecondHeader />
      <BackTopBtn />
      <SecondMain url={ URL_UI }/>
      <Footer />
    </div>
  }
}

export default UI;