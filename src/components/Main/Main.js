import React from 'react';
import './Main.scss';
import SectionStart from '../Sections/SectionStart';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const URL = ("/" + this.props.url);
    fetch(URL).then(response => response.json()).then(json => this.setState({ data: json }))
  }

  render() {
    const sectionName = this.props.sectionDisplay;
    return <main className={this.props.name}>
      <div className="jumbo__container">

        {(this.state.data).map((item, index) => {
          if (item.id === sectionName) { return <SectionStart key={(item.id + index).toString()} elem={item} /> }
          // if (item.section !== undefined) 
          // { return <Section key={(item.id + index).toString()} elem={item} sectionDisplay={this.props.sectionDisplay}/> };
        })}
      </div>
    </main>
  }
}

export default Main;