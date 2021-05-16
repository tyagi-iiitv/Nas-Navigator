
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
    this.updateData = this.updateData.bind(this);
    this.updatePerIteration = 10;
    this.changeFactor = 0.05;
  }

  generateData(nodeIds){
    let emb = new Array(nodeIds.length);
    for(let i=0;i<nodeIds.length;i++){
      let curDict = {
        x: 0.5,
        y: Math.floor(Math.random() * (170-130) + 130),
        id: nodeIds[i]
      }
      emb[i] = curDict;
    }
    this.setState({emb: emb})
  }

  updateData(){
    let curEmb = this.state.emb;
    let curIds = [...Array(this.state.emb.length).keys()].sort(()=>Math.random()-Math.random());
    for(let i=0;i<this.updatePerIteration;i++){
      if(Math.random() < curEmb[curIds[i]].x){
        curEmb[curIds[i]].x = Math.min(curEmb[curIds[i]].x + this.changeFactor, 1);
      }
      else{
        curEmb[curIds[i]].x = Math.max(curEmb[curIds[i]].x - this.changeFactor, 0);
      }
    }
    this.setState({emb: curEmb});
  }

  componentDidUpdate(prevProps){
    if(prevProps.iteration && this.props.iteration && prevProps.iteration !== this.props.iteration){
      this.updateData();
    }
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
                  xaxis:{autorange: false, showgrid: false, showline: true, zeroline: false, mirror: true, color: '#fff', title: 'Fitness Score', range:[0,1]}, 
                  yaxis: {autorange: true, showgrid: false, showline: true, zeroline: false, mirror: true, color: '#fff', title: 'Frequency'}, 
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