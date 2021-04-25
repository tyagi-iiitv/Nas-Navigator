import React, {Component} from 'react';
import Plot from 'react-plotly.js';

const equals = (a,b) => 
    a.length === b.length &&
    a.every((v,i) => v === b[i]);

export default class SearchSpace extends Component {
    constructor(props){
        super(props);
        this.state = {emb: []}
        this.generateData = this.generateData.bind(this);
    }

    generateData(nodeIds){
        // let numNodes = nodeIds.length;
        let numPoints = 200;
        let emb = new Array(numPoints);
        for(let i=0;i<numPoints;i++){
            let curDict = {
                x: Math.random(), 
                y: Math.random(),
            };
            emb[i] = curDict;
        }
        this.setState({emb: emb});
    }

    componentDidUpdate(prevProps){
        if(prevProps.nodes && this.props.nodes && !equals(prevProps.nodes, this.props.nodes)){
            this.generateData(this.props.nodes);
        }
    }
    render() {
        // if(this.props.emb.length === 0){
        //     return <div/>
        // }
        console.log(this.state, "Inside render")
        return (
            <div>
                <Plot
                data={[
                    {   
                        //Creates the original scatterplot based on the embeddings
                        x: this.state.emb.map(({x}) => x),
                        y: this.state.emb.map(({y}) => y),
                        type: 'scatter',
                        mode: 'markers',
                        // text: this.state.emb.map(({mask}) => mask),
                        marker: {color: '#F08080', size: 10},
                    },
                ]}
                // onHover = {(e)=>{
                //     this.props.callbackFromChild({hoverMask: e.points[0].text})
                // }}

                layout={ {  
                            uirevision: false, xaxis:{autorange: true}, 
                            yaxis: {autorange: true}, 
                            paper_bgcolor: "transparent",
                            plot_bgcolor: "transparent",
                            title: "Search Space"
                        }}
                    /> 
            </div>

        );
        
    }
}

