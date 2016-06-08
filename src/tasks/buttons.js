import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
import * as TodoActionCreators from '../actions/task.actions'
import {Link} from 'react-router'

class Buttons extends React.Component {

    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    };

    startTask = () => {
        this.props.startTask(this.props.id);
    };

    endTask = () => {
        this.props.endTask(this.props.id)
    };

    render() {
        return (
            <div>
                <Link to={this.path}><Button>Edit</Button></Link>
                <Button onClick={this.deleteTask}>Delete</Button>
                <Button onClick={this.startTask}>Start</Button>
                <Button onClick={this.endTask}>End</Button>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTask: bindActionCreators(TodoActionCreators.deleteTask, dispatch),
        endTask: bindActionCreators(TodoActionCreators.endTask, dispatch),
        startTask: bindActionCreators(TodoActionCreators.startTask, dispatch)
    }
}

Buttons = connect(mapStateToProps, mapDispatchToProps)(Buttons);

export default Buttons
