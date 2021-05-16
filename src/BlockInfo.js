
import React from 'react';
import Plot from 'react-plotly.js';

// X range: 0-1, Y range: 130-170
const equals = (a,b) => 
    a.length === b.length &&
    a.every((v,i) => v === b[i]);

export default class BlockInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {emb: [], selectedNode: []}
    this.generateData = this.generateData.bind(this);
  }

  generateData(nodeIds){
    let emb = new Array(nodeIds.length);
    for(let i=0;i<nodeIds.length;i++){
      let curDict = {
        x: Math.random(),
        y: Math.floor(Math.random() * (170-130) + 130),
        id: nodeIds[i]
      }
      emb[i] = curDict;
    }
    this.setState({emb: emb})
  }

  componentDidUpdate(prevProps){
    if(prevProps && this.props.nodeIds && !equals(prevProps.nodeIds, this.props.nodeIds)){
      this.generateData(this.props.nodeIds);
    }
    if(this.props.selectedNode && this.props.selectedNode != prevProps.selectedNode){
      let index = this.props.nodeIds.indexOf(this.props.selectedNode);
      this.setState({selectedNode: [this.state.emb[index]]});
    }
    else if(!this.props.selectedNode && this.props.selectedNode != prevProps.selectedNode){
      this.setState({selectedNode: []});
    }
  }

  render() {
    return (
      <Plot
        data={[
          {
            type: 'scatter', 
            x: this.state.emb.map(({x}) => x),
            y: this.state.emb.map(({y}) => y), 
            mode: 'markers',
            marker: {color: '#F08080', size: 10},
          },
          {
            type: 'scatter', 
            x: this.state.selectedNode.map(({x}) => x),
            y: this.state.selectedNode.map(({y}) => y), 
            mode: 'markers',
            marker: {color: '#d6604d', size: 30},
          }
        ]}
        onHover = {(e) => {
          // console.log(this.state.emb[e.points[0].pointNumber].id)
          this.props.callbackFromChild({barHover: this.state.emb[e.points[0].pointNumber].id})
        }}
    
        // }
        layout={{
                  uirevision: false, 
                  xaxis:{autorange: true, showgrid: false, showline: true, zeroline: false, mirror: true, color: '#fff'}, 
                  yaxis: {autorange: true, showgrid: false, showline: true, zeroline: false, mirror: true, color: '#fff'}, 
                  paper_bgcolor: "transparent",
                  plot_bgcolor: "transparent",
                  title: {text: "Block Information", font:{color: '#fff'}},
                  autosize: true,
                  showlegend: false,
                }}
        useResizeHandler={true}
        style={{width: '100%', height: '100%'}}
      />
    );
  }
}