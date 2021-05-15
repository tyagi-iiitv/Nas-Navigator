import React, {Component} from 'react';
import Plot from 'react-plotly.js';
const skmeans = require('skmeans');

const equals = (a,b) => 
    a.length === b.length &&
    a.every((v,i) => v === b[i]);

export default class SearchSpace extends Component {
    constructor(props){
        super(props);
        this.state = {emb: [], data: [], updated: false};
        this.colorMap = ['#ffffcc','#c7e9b4','#7fcdbb','#41b6c4','#2c7fb8','#253494'];
        this.generateData = this.generateData.bind(this);
        this.randomFactor = 0.7;
        this.baseColor = '';
    }

    generateData(nodeIds){
        let numNodes = nodeIds.length;
        let numPoints = 200;
        let emb = new Array(numPoints);
        let data = new Array(numPoints);
        for(let i=0;i<numPoints;i++){
            let x = Math.random();
            let y = Math.random();
            data[i] = [x, y];
        }
        let res = skmeans(data, 6, null, 10);
        for(let i=0;i<numPoints;i++){
            let colorId = Math.floor(Math.random()*this.colorMap.length);
            if(Math.random < this.randomFactor){
                colorId = res.idxs[i];
            }
            let curDict = {
                x: data[i][0],
                y: data[i][1],
                mask: Math.floor(Math.random()*Math.pow(2,numNodes-1)).toString(2).padStart(numNodes,0),
                color: this.colorMap[colorId],
            }
            emb[i] = curDict;
        }
        this.setState({emb: emb, data: data}, ()=> console.log(this.state.emb));
    }

    shouldComponentUpdate(prevProps, nextState){
        if(this.state.updated){
            console.log("false");
            return false;
        }
        console.log("true");
        return true;
    }

    componentDidUpdate(prevProps){
        if(prevProps.nodes && this.props.nodes && !equals(prevProps.nodes, this.props.nodes)){
            this.generateData(this.props.nodes);
            this.setState({updated: true});
        }
    }
    render() {
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
                        marker: {color: this.state.emb.map(({color}) => color), size: 10}
                        // marker: {color: '#F08080', size: 10},
                    },
                ]}
                onHover = {(e)=>{
                    // max int = 2^n-1
                    // generate random number b/w 1 and max int -> that is the mask
                    this.props.callbackFromChild({hoverMask: this.state.emb[e.points[0].pointNumber].mask})
                }}
                // onRelayout={(e) => {
                //     //To select points from the scatterplot which are then highlighted on the parallel coordinate plot
                //     if (!e["xaxis.autorange"]){
                //         let ymin = e["yaxis.range[0]"];
                //         let ymax = e["yaxis.range[1]"];
                //         let xmin = e["xaxis.range[0]"];
                //         let xmax = e["xaxis.range[1]"];
                //         //Filtering the points to retrieve the selected points
                //         let filteredArr = [];
                //         for(let i=0;i<this.state.data.length;i++){
                //             // console.log(this.state.embedArr[i].x)
                //             if((this.state.data[i][0] > xmin) && (this.state.data[i][0] < xmax) && (this.state.data[i][1] > ymin) && (this.state.data[i][1] < ymax)){
                //                 filteredArr.push(this.state.emb[i]);
                //             }
                //         }
                //         console.log(filteredArr)
                //         //Changes state of app.js by sending selected points
                //         // this.props.callbackFromParent({'scatter_points': filteredArr, 'para_points': filteredArr});

                //     }
                // }}

                layout={ {  
                            uirevision: false, 
                            xaxis:{autorange: true}, 
                            yaxis: {autorange: true}, 
                            paper_bgcolor: "transparent",
                            plot_bgcolor: "transparent",
                            title: "Search Space",
                            autosize: true,
                        }}
                
                useResizeHandler={true}

                style={{width: '100%', height: '100%'}}
                    /> 
            </div>

        );
        
    }
}

