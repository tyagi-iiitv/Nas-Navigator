import React from 'react';
import Plot from 'react-plotly.js';
export default class PlotEx extends React.Component {
  state = {
    line1: {
      x: [0],
      y: [0], 
      name: 'Line 1'
    },
    line2: {
      x: [0],
      y: [0],
      name: 'Line 2'
    }, 
    layout: { 
      datarevision: 0,
      plot_bgcolor: 'transparent', 
      paper_bgcolor: 'transparent',
      title: 'Accuracy Chart'
    },
    revision: 0,
  }
  componentDidMount() {
    console.log("did mount")
    if(this.props.trainModel)
      setInterval(this.increaseGraphic, 1000);
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.trainModel !== this.props.trainModel){
      setInterval(this.increaseGraphic, 1000);
    }
  }

  rand = () => parseInt(Math.random() * 10 + this.state.revision, 10);
  increaseGraphic = () => {
    if(this.props.trainModel){
      const { line1, line2, layout } = this.state;
      line1.x.push(this.rand());
      line1.y.push(this.rand());
      if (line1.x.length >= 10) {
        line1.x.shift();
        line1.y.shift();
      } 
      line2.x.push(this.rand());
      line2.y.push(this.rand());
      if (line2.x.length >= 10) {
        line2.x.shift();
        line2.y.shift();
      }
      this.setState({ revision: this.state.revision + 1 });
      layout.datarevision = this.state.revision + 1;
    }
  }
  render() {  
    return (<div>
      <Plot 
        data={[
          this.state.line1,
          this.state.line2,
        ]}
        layout={this.state.layout}
        revision={this.state.revision}
        graphDiv="graph"
      />
    </div>);
  }
}