import React from 'react'
import Buttons from './buttons'
import ActiveTime from '../components/activeTime'
import {Link} from 'react-router'


class Task extends React.Component{
    constructor(props){
        super(props);

        this.time = {
            start: this.props.task.started_at,
            finish: this.props.task.finished_at,
            active: this.props.task.active_time
        };

        this.path = "/tasks/" + this.props.task.id
    }

    render(){
        return (
            <tr>
                <td><Link to={this.path}>{this.props.task.name}</Link></td>
                <td>{this.props.task.description}</td>
                <td><ActiveTime time = {this.time}/></td>
                <td><Buttons id = {this.props.task.id}/></td>
            </tr>
        )
    }
}

export default Task