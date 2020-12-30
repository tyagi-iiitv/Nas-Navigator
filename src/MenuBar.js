import React, {Component} from 'react';
// import initialData from './initial-data';
import {NavDropdown, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-toggle-button';



export class GetDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.selected}; 

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // to set the value of the dropdown to the selected value
        this.setState({value: event}, ()=> this.props.callbackFromChild({model: this.state.value}));
    }

    render(){
        // //Displaying values in the values array and populating the dropdown menu
        let values_array = [];
        for(let i=0;i<this.props.values.length;i++){
            values_array.push(<NavDropdown.Item eventKey={this.props.values[i]} onSelect={this.handleChange}>{this.props.values[i]}</NavDropdown.Item>);
        }
        // Code for the select button
        const upload_button = (
            <NavDropdown style={{paddingLeft: 15}} title="Model" id="model-dropdown">
                {values_array}
            </NavDropdown>
        );
        return upload_button;
    }
}

export class OptDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.selected};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // to set the value of the dropdown to the selected value
        this.setState({value: event}, ()=> this.handleSubmit());
    }


    handleSubmit(){
        // To prevent the page from refreshing everytime we press the submit button
        // event.preventDefault();
        // send request to flask server, sending info about which value was selected
        this.props.callbackFromChild({optimizer: this.state.value})
    }


    render(){
        // //Displaying values in the values array and populating the dropdown menu
        let values_array = [];
        for(let i=0;i<this.props.values.length;i++){
            values_array.push(<NavDropdown.Item eventKey={this.props.values[i]} onSelect={this.handleChange}>{this.props.values[i]}</NavDropdown.Item>);
        }
        // Code for the select button
        const upload_button = (
            <NavDropdown style={{paddingLeft: 15}} title="Optimizer" id="opt-dropdown">
                {values_array}
            </NavDropdown>
        );
        return upload_button;
    }
}

export class LossDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.selected};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // to set the value of the dropdown to the selected value
        this.setState({value: event}, ()=> this.handleSubmit());
    }


    handleSubmit(){
        // To prevent the page from refreshing everytime we press the submit button
        // event.preventDefault();
        // send request to flask server, sending info about which value was selected
        this.props.callbackFromChild({loss: this.state.value})
    }


    render(){
        // //Displaying values in the values array and populating the dropdown menu
        let values_array = [];
        for(let i=0;i<this.props.values.length;i++){
            values_array.push(<NavDropdown.Item eventKey={this.props.values[i]} onSelect={this.handleChange}>{this.props.values[i]}</NavDropdown.Item>);
        }
        // Code for the select button
        const upload_button = (
            <NavDropdown style={{paddingLeft: 15}} title="Loss Function" id="loss-dropdown">
                {values_array}
            </NavDropdown>
        );
        return upload_button;
    }
}

export class DataDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.selected};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // to set the value of the dropdown to the selected value
        this.setState({value: event}, ()=> this.handleSubmit());
    }


    handleSubmit(){
        // To prevent the page from refreshing everytime we press the submit button
        // event.preventDefault();
        // send request to flask server, sending info about which value was selected
        this.props.callbackFromChild({dataset: this.state.value})
    }


    render(){
        // //Displaying values in the values array and populating the dropdown menu
        let values_array = [];
        for(let i=0;i<this.props.values.length;i++){
            values_array.push(<NavDropdown.Item eventKey={this.props.values[i]} onSelect={this.handleChange}>{this.props.values[i]}</NavDropdown.Item>);
        }
        // Code for the select button
        const upload_button = (
            <NavDropdown style={{paddingLeft: 15}} title="Dataset" id="data-dropdown">
                {values_array}
            </NavDropdown>
        );
        return upload_button;
    }
}

export class StartSearch extends Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.selected};
    }

    render(){
        return(
            <ToggleButton 
                value={ this.state.value || false }
                onToggle={(value) => {
                    this.setState({
                    value: !value,
                    })
                }} />
        )
    }
}

export class GetSearchSpace extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Get Search Space</Nav.Link>
        );
        return upload_button;
    }
}

export class TrainModel extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Train Model</Nav.Link>
        );
        return upload_button;
    }
}

export class SearchModel extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Search</Nav.Link>
        );
        return upload_button;
    }
}

export class SaveModel extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Save Model</Nav.Link>
        );
        return upload_button;
    }
}


export class GetAccuracyChart extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Accuracy Chart</Nav.Link>
        );
        return upload_button;
    }
}

export class GetBlockInfoChart extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Blocks Chart</Nav.Link>
        );
        return upload_button;
    }
}

export class GetUnion extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Get Union</Nav.Link>
        );
        return upload_button;
    }
}

export class GetIntersection extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Get Intersection</Nav.Link>
        );
        return upload_button;
    }
}

export class GetCompliment extends Component {
    render(){
        const upload_button = (
            <Nav.Link style={{paddingLeft: 15, outline: 'none'}} >Get Compliment</Nav.Link>
        );
        return upload_button;
    }
}



