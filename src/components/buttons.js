import React from 'react'
import { bindActionCreators } from 'redux'
import {} from '../actions/task.actions'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
import DeleteButton from './deleteButton'
import StartButton from './startButton'
import EndButton from './endButton'

import * as TodoActionCreators from '../actions/task.actions'

class Buttons extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }


    render() {

        let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch);
        console.log(boundActionCreators);

        return (
            <div>
                <Button>Edit</Button>
                <DeleteButton id={this.props.id} {...boundActionCreators}/>
                <StartButton id={this.props.id} {...boundActionCreators}/>
                <EndButton id={this.props.id} {...boundActionCreators}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTask: bindActionCreators(TodoActionCreators.deleteTask, dispatch),
        endTask: bindActionCreators(TodoActionCreators.endTask, dispatch),
        startTask: bindActionCreators(TodoActionCreators.startTask, dispatch)/*,
        editTask: bindActionCreators(TodoActionCreators.editTask, dispatch)*/
    }
}

Buttons = connect(mapDispatchToProps)(Buttons);

export default Buttons
