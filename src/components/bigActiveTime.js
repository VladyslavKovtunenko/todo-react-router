import React from 'react'
import ActiveTime from './activeTime'

class BigActiveTime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h2><ActiveTime time = {this.props.time}/></h2>
    }

}

export default BigActiveTime
