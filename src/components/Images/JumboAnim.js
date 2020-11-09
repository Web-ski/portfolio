import React from 'react';
import './JumboAnim.scss';

function rect(props) {
  const { ctx, x, y, width, height } = props;
  ctx.fillRect(x, y, width, height);
}

// function circle(props) {
//   const { ctx, x, y, radius, startAngle, endAngle} = props;
//   ctx.arc(x, y, radius, startAngle, endAngle);
//   //ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// }

class JumboAnim extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    setInterval(function() {

      ctx.clearRect(0, 0, 280, 280);

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
  
      for (let i = 0; i < 1000; i += 1) {
        (i % 2 == 0) ? ctx.fillStyle = "cyan" : ctx.fillStyle = "#7bfdfd";
  
          rect({ ctx, x: getRandomInt(280), y: getRandomInt(280), width: 4, height: 4 });  
        }
    }, 10)
  }

  render() {
    return <aside className={this.props.name}>
      <canvas ref="canvas" width={280} height={280} className="snow" />
    </aside>
  }
}

export default JumboAnim;