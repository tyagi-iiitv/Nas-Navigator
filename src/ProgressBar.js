import React, {Component} from 'react';
import {CircularProgressbar, CircularProgressbarWithChildren,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './ProgressBar.module.scss';

export default class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            iteration: 1,
            progress: 50,
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