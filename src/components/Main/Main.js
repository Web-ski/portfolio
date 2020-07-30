import React from 'react';
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import './Main.scss';
import PageTitle from '../Titles/PageTitle'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  
  componentDidMount() {
    const URL = ("/" + this.props.url);
    fetch(URL).then(response => response.json()).then(json => console.log(json))
    //console.log(this.state.data)
  }

  render() {
    return <div className="main">

    </div>
  }
}

export default Main;