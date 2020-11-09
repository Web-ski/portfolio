import React from 'react';
import './CV.scss';
import './TimeLine.scss';
import TimeLineItem from './TimeLineItem';

class TimeLineBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: true }
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    this.setState(state => ({ toggleOn: !state.toggleOn }))
  }
  render() {
    const elem = this.props.elem[0];
    const elemsOn = this.props.elem[1];
    return <article className={elem.timeLineBox + " " + elemsOn}>
      <div className={elem.children[0].div + ' ' + (this.state.toggleOn ? 'time-line--off' : 'time-line--active')}>
        {(elem.children[0].children).map(item => (<TimeLineItem elem={item} />))}
      </div>
      <div onClick={this.handleClick} className={"time-line__switcher " + (this.state.toggleOn ? 'switcher--top-left' : 'switcher--bottom-right')}>
        <p className={"article__text " + (this.state.toggleOn ? 'text--top-left' : 'text--bottom-right')}>{this.state.toggleOn ? 'Before' : 'After'}</p>
      </div>
      <div className={elem.children[1].div + ' ' + (this.state.toggleOn ? 'time-line--active' : 'time-line--off')}>
        {(elem.children[1].children).map(item => (<TimeLineItem elem={item} />))}
      </div>
    </article>;
  }
}

export default TimeLineBox;