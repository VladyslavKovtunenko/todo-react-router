import React from 'react'
import Buttons from './buttons'
import BigActiveTime from '../components/bigActiveTime'
import NavBar from '../app/navBar'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

class BigTask extends React.Component{
    constructor(props){
        super(props);
        
        let url = window.location.href;
        url = url.split('/');
        let id = url[url.length - 1];
        let task = this.props.tasks.filter((task) => {if(task.id == id) return task});

        task = task[0];

        this.state = {
            time : {
                start: task.started_at,
                finish: task.finished_at,
                active: task.active_time
            },
            name: task.name,
            description: task.description,
            id: id
        };
    }

    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={7}>
                        <h2>{this.state.name}</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2}>
                        <NavBar/>
                    </Col>
                    <Col md={1}/>
                    <Col md={7}>
                        <h3>{this.state.description}</h3>
                        <BigActiveTime time = {this.state.time}/>
                        <Buttons id = {this.state.id}/>
                    </Col>
                </Row>
            </Grid>
        )

    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = () => {
    return {};
};

BigTask = connect(mapStateToProps, mapDispatchToProps)(BigTask);

export default BigTask