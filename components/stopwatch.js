import React from 'react'

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        let time;
        setTimeout(
            () => {

                let seconds,
                    minutes,
                    hours;
                ++time;

                time = Math.floor(this.props.activeTime/100);
                seconds = time % 100 % 60;
                hours = Math.floor(time / 60 /60);
                minutes = Math.floor((time - seconds) / 60) - hours * 60;
                time = hours + ':' + minutes + ':' + seconds;
                this.setState({
                    time: time
                });
            },
            1000
        )
    }

    render(){
        return <div>{this.state.time}</div>
    }
}

export default Stopwatch;