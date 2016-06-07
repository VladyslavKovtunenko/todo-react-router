import React from 'react'

class Stopwatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0
        };
    }

    componentDidMount() {
        let time;
        time = Math.floor(this.props.activeTime/100);

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
                hours = Math.floor(time / 60 /60);
                minutes = Math.floor((time - seconds) / 60) - hours * 60;
                if(minutes < 10){
                    minutes = '0' + minutes;
                }
                timeString = hours + ':' + minutes + ':' + seconds;
                console.log(timeString);
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