import React from 'react'
import AddTask from '../tasks/addTask'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import NavBar from './navBar'

class NewTask extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={8}>
                        <h2>New task</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2}>
                        <NavBar/>
                    </Col>
                    <Col md={1}/>
                    <Col md={8}>
                        <AddTask/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default NewTask