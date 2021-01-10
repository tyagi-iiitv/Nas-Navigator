import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import * as menu from './MenuBar';
import './App.css';  
import state from './state';
import ModelBuilder from './ModelBuilder';
import SearchSpace from './SearchSpace';
import BlockInfo from './BlockInfo';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 25%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = state;
        this.callbackFromChild = this.callbackFromChild.bind(this);
    }

    callbackFromChild(dataFromChild){
        return;
    }

    render(){
        return(
            <div>
                <Container>
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
                    <Row>
                        <Col>
                            <SearchSpace/>
                            <BlockInfo/>
                        </Col>
                        <ModelBuilder/>
                    </Row>
                </Container>
            </div>
        )
    }

}