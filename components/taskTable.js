import React from 'react'
import {Table} from 'react-bootstrap'
import {Grid, Row, Col} from 'react-bootstrap'
import Task from './task'

class TaskTable extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.tasks);
    }

    static defaultProps = {
        tasks: [{
            title: 'hey! ho!',
            description: 'let`s go!'
        },
        {
            title: 'don`t stop me',
            description: 'right now'
        }]
    };

    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={1}></Col>
                    <Col md={6}>
                        <h2>My task list</h2>
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
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TaskTable
