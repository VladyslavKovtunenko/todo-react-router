import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import NavBar from './navBar'

class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={7}>
                        <h2>Tasks for day</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2}>
                        <NavBar/>
                    </Col>
                    <Col md={1}/>
                    <Col md={7}>
                        <img src="http://img.hurtom.com/i/2016/06/Task-Management.jpg"/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home