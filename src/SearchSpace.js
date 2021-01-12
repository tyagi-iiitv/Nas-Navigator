import React, {Component} from 'react';
import Plot from 'react-plotly.js';

export default class SearchSpace extends Component {
    render() {
        if(this.props.emb.length === 0){
            return <div/>
        }

        return (
            <div>
                <Plot
                data={[
                    {   
                        //Creates the original scatterplot based on the embeddings
                        x: this.props.emb.map(({x}) => x),
                        y: this.props.emb.map(({y}) => y),
                        type: 'scatter',
                        mode: 'markers',
                        marker: {color: '#F08080', size: 10},
                    },
                ]}
                layout={ {uirevision: false, xaxis:{autorange: true}, yaxis: {autorange: true}} }
                />
            </div>

        );
        
    }
}

