import React, {Component} from 'react';
import {CircularProgressbar, CircularProgressbarWithChildren,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './ProgressBar.module.scss';

export default class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            iteration: 1,
            progress: 0,
            on: this.props.search,
            interval: null
        }
    }

    componentDidUpdate(prevProps){
        if(!this.props.search && this.state.interval){
            console.log('clear interval')
            clearInterval(this.state.interval);
        }
        if(this.props.search && prevProps.search !== this.props.search){
            this.setState({interval: setInterval(this.increaseGraphic, 1000)})
        }
    }

    increaseGraphic = () => {
        if(this.props.search){
            const progress = this.state.progress + 10;
            if(progress >= 100){
                this.setState({iteration: this.state.iteration+1, progress: 0}, ()=> this.props.callbackFromChild({iteration: this.state.iteration}))
            }
            else{
                this.setState({progress: progress});
            }
        }
    }

    render(){
        return(
            <div className={styles.progressbar}>
                <CircularProgressbar 
                    value={this.state.progress} 
                    text={this.state.iteration}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </div>
        )
    }
}