import React from 'react'
import {Button} from 'react-bootstrap'
import DeleteButton from './deleteButton'

class Task extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <tr>
                <td>{this.props.task.name}</td>
                <td>{this.props.task.description}</td>
                <td><Button>Edit</Button><DeleteButton id={this.props.task.id}/></td>
            </tr>
        )
    }
}

export default Task