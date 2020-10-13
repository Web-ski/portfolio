import React from 'react';
import './SectionsStart.scss';
import Article from './Article';

class SectionStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleOn: 0,
      btnOn: 0
    };
  }

  articleActive(number) {
    //console.log("gienek", number);
    this.setState({ btnOn: number })
    this.setState({ articleOn: number })
  }

  render() {
    const elem = this.props.elem;
    return (<section id={elem.id} className={elem.section}>
      {(elem.children !== undefined) && (
        (elem.children).map((item, index) => {
          if (item.article !== undefined) 
          { return <Article key={item.toString() + index} 
          elem={[item, (this.state.articleOn === index ? "articleOn" : "")]} /> };
        })
      )}
      <nav className="section-navigation">
        {(elem.children !== undefined) && (
          (elem.children).map((item, index) => {
            if (item.article !== undefined) 
            { return <button onClick={() => this.articleActive(index)}
            key={item.toString() + index} 
            className={"navigation__btn " + (this.state.btnOn === index ? "navigation__btn--active" : "")
          }></button> };
          })
        )}
      </nav>
    </section>)
  }
}

export default SectionStart;