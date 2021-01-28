import React from 'react';
import Plot from 'react-plotly.js';

export default class BlockInfo extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: this.props.blockFrequency.map(({x}) => x),
            y: this.props.blockFrequency.map(({y}) => y),
            type: 'bar',
          },
          // {
          //   type: 'scatter', 
          //   x: this.props.fitnessScores.map(({x}) => x),
          //   y: this.props.fitnessScores.map(({y}) => y), 
          //   mode: 'markers'
          // }
        ]}
        onHover = {(e) => {
            this.props.callbackFromChild({barHover: e.points[0].pointNumber})
        }
    
        }
        layout={ {uirevision: false, xaxis:{autorange: true}, yaxis:{autorange: true}} }
      />
    );
  }
}
