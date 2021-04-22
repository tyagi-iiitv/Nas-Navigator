import React from 'react';
import Plot from 'react-plotly.js';

export default class BlockInfo extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            type: 'scatter', 
            x: this.props.fitnessScores.map(({y}) => y),
            y: this.props.blockFrequency.map(({y}) => y), 
            mode: 'markers',
            marker: {color: '#F08080', size: 10},
          }
        ]}
        onHover = {(e) => {
            this.props.callbackFromChild({barHover: e.points[0].pointNumber})
        }
    
        }
        layout={{
                    autosize:true, 
                    title: "Block Information",
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                }}
        useResizeHandler={true}
        style={{height: '100%'}}
      />
    );
  }
}