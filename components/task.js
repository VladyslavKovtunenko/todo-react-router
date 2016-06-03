import React from 'react'
import {Button} from 'react-bootstrap'
import DeleteButton from './deleteButton'
import StartButton from './startButton'
import EndButton from './endButton'
import ActiveTime from './activeTime'

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: '1'
        };

        this.time = {
            start: this.props.task.started_at,
            finish: this.props.task.finished_at,
            active: this.props.task.active_time
        }
    }

    render(){
        return (
            <tr>
                <td>{this.props.task.name}</td>
                <td>{this.props.task.description}</td>
                <td><ActiveTime time={this.time}/></td>
                <td>
                    <Button>Edit</Button>
                    <DeleteButton id={this.props.task.id}/>
                    <StartButton id={this.props.task.id}/>
                    <EndButton id={this.props.task.id}/>
                </td>
            </tr>
        )
    }
}

export default Task