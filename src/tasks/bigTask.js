import React from 'react'
import Buttons from './buttons'
import BigActiveTime from '../components/bigActiveTime'

class Task extends React.Component{
    constructor(props){
        super(props);

        this.time = {
            start: this.props.task.started_at,
            finish: this.props.task.finished_at,
            active: this.props.task.active_time
        }
    }

    render(){
        return (
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Active time</td>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.props.task.name}</td>
                    <td>{this.props.task.description}</td>
                    <td><BigActiveTime time = {this.time}/></td>
                </tr>
                <tr>
                    <td colSpan="2"><Buttons id = {this.props.task.id}/></td>
                </tr>
            </tbody>
        </Table>
            
            
        )
    }
}

export default Task