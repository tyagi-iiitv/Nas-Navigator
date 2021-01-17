import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import * as menu from './MenuBar';
import './App.css';  
import state from './state';
import ModelBuilder from './ModelBuilder';
import SearchSpace from './SearchSpace';
import BlockInfo from './BlockInfo';
import {Container, Grid} from 'semantic-ui-react';   


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = state;
        this.callbackFromChild = this.callbackFromChild.bind(this);
    }

    callbackFromChild(dataFromChild){
        console.log(dataFromChild);
        this.setState({dataRec: false});
        this.setState(dataFromChild, ()=> this.setState({dataRec: true}))
    }

    render(){
        if (!this.state.dataRec){
            return(
                <div>
                </div>
            )
        }
        return(
            <div>
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
                        <menu.StartSearch selected={this.state.selected.trainModel} callbackFromChild={this.callbackFromChild}/>
                        <menu.SearchModel/>
                        <menu.StartSearch selected={this.state.selected.search} callbackFromChild={this.callbackFromChild}/>
                    </Nav>
                </Navbar>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <SearchSpace emb={this.state.embed} callbackFromChild={this.callbackFromChild}/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <ModelBuilder/>
                            <BlockInfo/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}