import React from 'react'

class Stopwatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0
        };
    }

    componentDidMount() {
        let time = Math.floor(this.props.activeTime/1000);

        setInterval(
            () => {
                let seconds,
                    minutes,
                    hours,
                    timeString;

                ++time;

                seconds = time % 60;
                if(seconds < 10){
                    seconds = '0' + seconds;
                }

                minutes = Math.floor((time - seconds) / 60) % 60;
                if(minutes < 10){
                    minutes = '0' + minutes;
                }

                hours = Math.floor(time / 3600);

                timeString = hours + ':' + minutes + ':' + seconds;
                this.setState({
                    time: timeString
                });
            },
            1000
        );
    }

    render() {
        return <div>{this.state.time}</div>
    }
}

export default Stopwatch;