import React from 'react'

class ActiveTime extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    /*timeCalc(){
     console.log(this.props.task);
     if(this.props.task.finished_at != null){
     this.state = {time: this.props.task.active_time};
     // console.log(';p');
     } else if(this.props.task.started_at != null){
     let time = -Date.parse(this.props.task.started_at) + Date.now();
     this.state = {time: time};
     } else {
     this.state = {time: 'do it'};
     }
     }*/

    render(){
        let time;

        return <div></div>
    }
}

export default ActiveTime