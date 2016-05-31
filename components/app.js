import React from 'react'
import TaskTable from './taskTable'
import AddTask from './addTask'
import {Grid, Row, Col} from 'react-bootstrap'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={1}></Col>
                    <Col md={5}>
                        <h2>My task list</h2>
                        <TaskTable/>
                    </Col>
                    <Col md={4}>
                        <h2>New task</h2>
                        <AddTask/>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default App
