import React from 'react'
import {Table} from 'react-bootstrap'
import Task from './task'

class TaskTable extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default TaskTable

/*
 <div><h1>My task list</h1>
 </div>
*/
/*
{this.props.tasks.map = ((task) => {
    <Task task = {task}/>
})}*/
