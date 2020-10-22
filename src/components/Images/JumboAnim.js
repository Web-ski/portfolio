import React from 'react';
import './JumboAnim.scss';

class JumboAnim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumboAnim: ["", "", "", "", "", ""]
    }
  }

  render() {
    return <aside className={this.props.name}>
      {(this.state.jumboAnim).map(() => (<div className="anim__elem"></div>))}
    </aside>
  }
}

export default JumboAnim;