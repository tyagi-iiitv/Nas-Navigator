import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import * as menu from './MenuBar';
import './App.css';  
import state from './state';
import ModelBuilder from './ModelBuilder';
import SearchSpace from './SearchSpace';
import BlockInfo from './BlockInfo';
import styles from './App.module.scss';
import PlotEx from './AccuracyChart';
// import { blockFrequency } from './embeddings';
// import {Container, Grid} from 'semantic-ui-react';   


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = state;
        this.callbackFromChild = this.callbackFromChild.bind(this);
        this.changeOnCanvas = this.changeOnCanvas.bind(this);
    }

    changeOnCanvas(enter){
        if(enter && !this.state.onCanvas)
            this.setState({onCanvas: true, barHover: null, hoverMask: null});
        else if(!enter && this.state.onCanvas)
            this.setState({onCanvas: false});
    }

    callbackFromChild(dataFromChild){
        this.setState({dataRec: false});
        this.setState(dataFromChild, ()=> this.setState({dataRec: true}))
    }

    render(){
        // if (this.state.onCanvas){
        //     return(
        //         <div>
        //         </div>
        //     )
        // }
        // console.log(this.state.nodeIds)
        return(
            <div className={styles.body}>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand style={{fontSize: 25, padding: '5 0'}}>One-Shot Search</Navbar.Brand>
                    <Nav className="mr-auto">
                        <menu.GetDropdown values={this.state.models} selected={this.state.selected.model} callbackFromChild={this.callbackFromChild}/>
                        <menu.OptDropdown values={this.state.optimizers} selected={this.state.selected.optimizer} callbackFromChild={this.callbackFromChild}/>
                        <menu.LossDropdown values={this.state.losses} selected={this.state.selected.loss} callbackFromChild={this.callbackFromChild}/>
                        <menu.DataDropdown values={this.state.datasets} selected={this.state.selected.dataset} callbackFromChild={this.callbackFromChild}/>
                        <menu.SaveModel />
                        <menu.GetSearchSpace callbackFromChild={this.callbackFromChild}/>
                        <menu.GetAccuracyChart />
                        <menu.GetBlockInfoChart/>
                        <menu.SetOperations values={this.state.operations} selected={this.state.selected.operation} callbackFromChild={this.callbackFromChild}/>
                    </Nav>
                    <Nav>
                        <menu.TrainModel/>
                        <menu.StartTrain selected={this.state.trainModel} callbackFromChild={this.callbackFromChild}/>
                        <menu.SearchModel/>
                        <menu.StartSearch selected={this.state.search} callbackFromChild={this.callbackFromChild}/>
                    </Nav>
                </Navbar>
                <div className={styles.canvas} onMouseEnter={()=> this.changeOnCanvas(true)}
                onMouseLeave={()=> this.changeOnCanvas(false)}>
                    <ModelBuilder callbackFromChild={this.callbackFromChild} barHover={this.state.barHover} onCanvas={this.state.onCanvas} hoverMask={this.state.hoverMask}/>
                </div>
                <div className={styles.charts}>
                    <SearchSpace nodes={this.state.nodeIds} callbackFromChild={this.callbackFromChild} />
                    <BlockInfo fitnessScores={this.state.fitnessScores} initialFitness={this.state.initialFitness} blockFrequency={this.state.blockFrequency} callbackFromChild={this.callbackFromChild} nodeIds={this.state.nodeIds} selectedNode={this.state.selectedNode}/>
                    <PlotEx trainModel={this.state.trainModel} loss={this.state.loss} valLoss={this.state.valLoss}/>
                </div>

            </div>
        )
    }

}