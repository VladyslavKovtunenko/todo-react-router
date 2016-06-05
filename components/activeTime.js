import React from 'react'
import Stopwatch from './stopwatch'

class ActiveTime extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.time);
    }

    render(){
        let time;
        if (!this.props.time.start && !this.props.time.finish){
            time = 'do it'
        } else if (!this.props.time.start && this.props.time.finish){
            time = this.props.time.active;
        } else {
            /*console.log(Date.now());
            console.log(Date.parse(this.props.time.start));
            console.log(Date.parse(this.props.start));*/
            time = <Stopwatch activeTime = {Date.now() - Date.parse(this.props.time.start)}/>
        }

        return <div>{time}</div>
    }
}

export default ActiveTime