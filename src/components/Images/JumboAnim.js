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
    ctx.clearRect(0, 0, 280, 280);
    // draw children “components”
    //ctx.beginPath();
    // circle({ ctx, x: 100, y: 75, radius: 50, startAngle: 0, endAngle: 2*Math.PI})
    // ctx.fill();
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    for (let i = 0; i < 1000; i += 1) {
      ctx.fillStyle = "white";

        rect({ ctx, x: getRandomInt(280), y: getRandomInt(280), width: 4, height: 4 });


    }
    //rect({ ctx, x: 10, y: 10, width: 4, height: 4 });
    //rect({ ctx, x: 110, y: 110, width: 4, height: 4 });
  }



  render() {
    return <aside className={this.props.name}>
      <canvas ref="canvas" width={280} height={280} className="snow" />
    </aside>
  }
}

export default JumboAnim;