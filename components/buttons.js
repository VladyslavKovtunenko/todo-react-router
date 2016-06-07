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
        console.log(this.props)
    }

    componentDidMount() {
        let { dispatch } = this.props;
        console.log(dispatch); // undefined ??
    }

    render() {

        //let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch);

        return (
            <div>
                <Button>Edit</Button>
                <DeleteButton id={this.props.id}/>
                <StartButton id={this.props.id}/>
                <EndButton id={this.props.id}/>
            </div>
        )
    }
}

export default Buttons
