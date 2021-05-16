import React from 'react';
import Plot from 'react-plotly.js';
export default class PlotEx extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      values: this.props.accuracyValues,
      line1: {
        x: [0],
        y: [this.props.loss[0]], 
        name: 'Loss'
      },
      line2: {
        x: [0],
        y: [this.props.valLoss[0]],
        name: 'Validation Loss'
      }, 
      layout: { 
        datarevision: 0,
        plot_bgcolor: 'transparent', 
        paper_bgcolor: 'transparent',
        title: {text: 'Loss Chart', font:{color: '#fff'}},
        autosize: true,
        xaxis:{showgrid: false, showline: true, showticklabels: true, zeroline: false, mirror: true, color: '#fff'},
        yaxis:{showgrid: false, showline: true, showticklabels: true, zeroline: false, mirror: true, color: '#fff'},
        legend: {x: 1, xanchor: 'right', y: 1},
      },
      revision: 0,
      loss: this.props.loss,
      valLoss: this.props.valLoss,
      interval: null,
    }
  }
  
  // componentDidMount() {
  //   console.log("did mount")
  //   if(this.props.trainModel)
  //     setInterval(this.increaseGraphic, 1000);
  // }
  
  componentDidUpdate(prevProps){
    if(!this.props.trainModel && this.state.interval){
      console.log("clear interval")
      clearInterval(this.state.interval);
    }
    if(this.props.trainModel && prevProps.trainModel !== this.props.trainModel){
      console.log("did update")
      this.setState({interval: setInterval(this.increaseGraphic, 1000)});
    }
  }

  // rand = () => parseInt(Math.random() * 10 + this.state.revision, 10);
  increaseGraphic = () => {
    if(this.props.trainModel){
      console.log("here")
      const { line1, line2, layout } = this.state;
      line1.x.push(this.state.revision+1);
      line1.y.push(this.state.loss[this.state.revision+1]);
      if (line1.x.length >= 20) {
        line1.x.shift();
        line1.y.shift();
      } 
      line2.x.push(this.state.revision+1);
      line2.y.push(this.state.valLoss[this.state.revision+1]);
      if (line2.x.length >= 20) {
        line2.x.shift();
        line2.y.shift();
      }
      this.setState({ revision: this.state.revision + 1 });
      layout.datarevision = this.state.revision + 1;
    }
  }
  render() {  
    // console.log(this.props.loss, this.props.valLoss)
    return (<div>
      <Plot 
        data={[
          this.state.line1,
          this.state.line2,
        ]}
        layout={this.state.layout}
        useResizeHandler={true}
        style={{width: '100%', height: '100%'}}
        revision={this.state.revision}
        graphDiv="graph"
      />
    </div>);
  }
}