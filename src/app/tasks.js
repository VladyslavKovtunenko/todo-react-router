import React from 'react'
import TaskTable from '../tasks/taskTable'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import NavBar from './navBar'

class Tasks extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={8}>
                        <h2>My task list</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2}>
                        <NavBar/>
                    </Col>
                    <Col md={1}/>
                    <Col md={8}>
                        <TaskTable/>
                        <Link to="tasks/new"><Button>New task</Button></Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Tasks