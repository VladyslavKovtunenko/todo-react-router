import React from 'react'
import {Button} from 'react-bootstrap'
import {startTask, showTask} from "../actions/task.actions";
import {connect} from 'react-redux'

class StartButton extends React.Component {
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this);
    }

    onclick(e) {
        e.preventDefault();
        this.props.start(this.props.id);
    }

    render() {
        return <Button onClick={this.onclick}>Start</Button>
    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        start: (id) => {
            dispatch(startTask(id));
            dispatch(showTask());
        }
    }
};

StartButton = connect(mapStateToProps, mapDispatchToProps)(StartButton);

export default StartButton
