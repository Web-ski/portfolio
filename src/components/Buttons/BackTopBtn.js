import React, { Fragment } from 'react';
import './Buttons.scss';

class BackTopBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true }
  }

  handleClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll(this.state.visible));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll(visibility) {
    //console.log(visibility);
    (window.scrollY > 500 && visibility === true) && (this.setState({ visible: false }));
    (window.scrollY <= 500 && visibility === false) && (this.setState({ visible: true }))
  }

  render() {
    return <Fragment>
      <button onClick={this.handleClick.bind(this)} className={"button__back-top" + (this.state.visible ? "" : " button__back-top--active")}>Top
      </button>
      <div className={"arrow__top" + (this.state.visible ? "" : " button__back-top--active")}></div>
    </Fragment>
  }
}

export default BackTopBtn;