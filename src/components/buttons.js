import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
import DeleteButton from './deleteButton'
import StartButton from './startButton'
import EndButton from './endButton'

import * as TodoActionCreators from '../actions/task.actions'

class Buttons extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <Button>Edit</Button>
                <DeleteButton id={this.props.id} />
                <StartButton id={this.props.id} />
                <EndButton id={this.props.id} />
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
        startTask: bindActionCreators(TodoActionCreators.startTask, dispatch)/*,
        editTask: bindActionCreators(TodoActionCreators.editTask, dispatch)*/
    }
}

Buttons = connect(mapStateToProps, mapDispatchToProps)(Buttons);

export default Buttons
