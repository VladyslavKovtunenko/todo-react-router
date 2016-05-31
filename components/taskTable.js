import React from 'react'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import Task from './task'
import showTask from "../actions/showTask"

class TaskTable extends React.Component{
    constructor(props){
        super(props);
        this.props.getTasks();
        console.log(this.props.tasks);
    }

    render(){
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task) => (
                        <Task task={task}/>
                    ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: () => {
            dispatch(showTask())
        }
    }
};

TaskTable = connect(mapStateToProps, mapDispatchToProps)(TaskTable);

export default TaskTable
