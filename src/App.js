import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import * as menu from './MenuBar';
import './App.css';  

function App() {
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand style={{fontSize: 25, padding: '5 0'}}>One-Shot Search</Navbar.Brand>
                <Nav className="mr-auto">
                    <menu.LoadDataset/>
                    <menu.SaveModel/>
                    <menu.LoadModel/>
                    <menu.GetAccuracyChart/>
                    <menu.GetBlockInfoChart/>
                    <menu.GetUnion/>
                    <menu.GetIntersection/>
                    <menu.GetCompliment/>
                </Nav>
                <Nav>
                    <menu.TrainModel/>
                    <menu.SearchModel/>
                </Nav>
        </Navbar>
    );
}

export default App;
