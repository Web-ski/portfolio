import React from 'react';
import './JumboAnim.scss';

function rect(props) {
  const { ctx, x, y, width, height } = props;
  ctx.fillRect(x, y, width, height);
}

function circle(props) {
  const { ctx, x, y, width, height } = props;
  ctx.fillRect(x, y, width, height);
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
class JumboAnim extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0, 0, 300, 300);
    // draw children “components”

    // rect({ ctx, x: 10, y: 10, width: 5, height: 5 });
    // rect({ ctx, x: 110, y: 110, width: 5, height: 5 });
  }

  render() {
    return <aside className={this.props.name}>
      <canvas ref="canvas" width={300} height={300} />
    </aside>
  }
}

export default JumboAnim;