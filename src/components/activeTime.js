import React from 'react'
import Stopwatch from './stopwatch'

class ActiveTime extends React.Component {

    render() {

        let time;
        if (!this.props.time.start && !this.props.time.finish){
            time = 'do it'
        } else if (!this.props.time.start && this.props.time.finish){

            let seconds,
                minutes,
                hours;

            seconds = this.props.time.active % 60;
            if(seconds < 10){
                seconds = '0' + seconds;
            }

            minutes = Math.floor((this.props.time.active - seconds) / 60) % 60;
            if(minutes < 10){
                minutes = '0' + minutes;
            }

            hours = Math.floor(this.props.time.active / 3600);

            time = hours + ':' + minutes + ':' + seconds;

        } else {
            time = <Stopwatch activeTime = {Date.now() - Date.parse(this.props.time.start)}/>
        }

        return <div>{time}</div>
    }
}

export default ActiveTime