import React from 'react'

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.activeTime);
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        let i = this.state.time;
        setInterval(
            () => {
                ++i;
                this.setState({
                    time: i
                })
            },
            1000
        )
    }

    render(){
        return <div>{this.state.time}</div>
    }
}

export default Stopwatch;