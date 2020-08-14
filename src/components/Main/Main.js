import React from 'react';
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import './Main.scss';
import Section from '../Sections/Section'
import MainRadio from '../Radio/MainRadio'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    const URL = ("/" + this.props.url);
    fetch(URL).then(response => response.json()).then(json => this.setState({ data: json }))
  }

  render() {
    return <div className="main">
      {(this.state.data).map((item, index) => {
        if (item.section !== undefined) { return <Section key={item.section + index} elem={item}/> };
      })}
      <div className="main-radio">
      {(this.state.data).map((item, index) => {
        if (item.section !== undefined) { return <MainRadio key={"radio" + item.section + index} elem={item}/> };
      })}
      </div>
    </div>
  }
}

export default Main;