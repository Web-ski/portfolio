import React, { Fragment } from 'react';
import './Webs.scss';
import Footer from "../Footer/Footer"
import SecondHeader from '../Headers/SecondHeader'
import { URL_WEBS } from "../../constans";
import SecondMain from '../Main/SecondMain';
import BackTopBtn from '../Buttons/BackTopBtn';


class Webs extends React.Component {
  render() {
    return <Fragment>
      <aside className="parallax parallax-second"></aside>
      <div>
        <SecondHeader />
        <BackTopBtn />
        <SecondMain url={URL_WEBS} />
        <Footer />
      </div>
    </Fragment>
  }
}

export default Webs;