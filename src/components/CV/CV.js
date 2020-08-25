import React from 'react';
import './CV.scss';
import Footer from "../Footer/Footer"
import SecondHeader from '../Headers/SecondHeader';
import { URL_CV } from "../../constans";
import SecondMain from '../Main/SecondMain';
import BackTopBtn from '../Buttons/BackTopBtn';

class CV extends React.Component {
  render() {
    return <div>
      <SecondHeader />
      <BackTopBtn />
      <SecondMain url={URL_CV} />
      <Footer />
    </div>
  }
}

export default CV;