import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DeleteButton from '../components/deleteButton'
import StartButton from '../components/startButton'
import EndButton from '../components/endButton'
import * as TodoActionCreators from '../actions/task.actions'

class Buttons extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Button>Edit</Button>
                <DeleteButton id = {this.props.id} deleteTask = {this.props.deleteTask} />
                <StartButton id = {this.props.id} startTask = {this.props.startTask} />
                <EndButton id = {this.props.id} endTask = {this.props.endTask} />
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
