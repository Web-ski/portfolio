import React from 'react';
import './Webs.scss';
import Footer from "../Footer/Footer"
import SecondHeader from '../Headers/SecondHeader'
import { URL_WEBS } from "../../constans";
import SecondMain from '../Main/SecondMain';
import BackTopBtn from '../Buttons/BackTopBtn';


class Webs extends React.Component {
  render() {
    return <div>
            <SecondHeader />
            <BackTopBtn />
            <SecondMain url={ URL_WEBS }/>
      <Footer />
    </div>
  }
}

export default Webs;