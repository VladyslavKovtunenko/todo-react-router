import React from 'react'
import {Button} from 'react-bootstrap'

class Task extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <tr>
                <td>{this.props.task.title}</td>
                <td>{this.props.task.description}</td>
                <td><Button>Edit</Button><Button>Delete</Button></td>
            </tr>
        )
    }
}

export default Task