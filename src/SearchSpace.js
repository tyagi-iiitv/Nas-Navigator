import React, {Component} from 'react';
import Plot from 'react-plotly.js';

const equals = (a,b) => 
    a.length === b.length &&
    a.every((v,i) => v === b[i]);

export default class SearchSpace extends Component {
    componentDidUpdate(prevProps){
        if(prevProps.nodes && this.props.nodes && !equals(prevProps.nodes, this.props.nodes)){
            console.log("now search space will change");
        }
    }
    render() {
        // if(this.props.emb.length === 0){
        //     return <div/>
        // }
        return (
            <div>
                {/* <Plot
                data={[
                    {   
                        //Creates the original scatterplot based on the embeddings
                        x: this.props.emb.map(({x}) => x),
                        y: this.props.emb.map(({y}) => y),
                        type: 'scatter',
                        mode: 'markers',
                        text: this.props.emb.map(({mask}) => mask),
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
                    />  */}
            </div>

        );
        
    }
}

