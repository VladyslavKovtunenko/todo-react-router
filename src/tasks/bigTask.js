import React from 'react'
import Buttons from './buttons'
import BigActiveTime from '../components/bigActiveTime'
import NavBar from '../app/navBar'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {getTask} from "../actions/task.actions"

class BigTask extends React.Component{
    constructor(props){
        super(props);

        let id = this.props.params.id;

        this.props.getTask(id);
    }

    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={7}>
                        <h2>{this.props.task.name}</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2}>
                        <NavBar/>
                    </Col>
                    <Col md={1}/>
                    <Col md={7}>
                        <h3>{this.props.task.description}</h3>
                        <BigActiveTime
                            time = {
                                {
                                    start: this.props.task.started_at,
                                    finish: this.props.task.finished_at,
                                    active: this.props.task.active_time
                                }
                            }
                        />
                        <Buttons id = {this.props.params.id}/>
                    </Col>
                </Row>
            </Grid>
        )

    }
}

const mapStateToProps = ({task}) => {
    return {task}
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTask: (id) => {
            dispatch(getTask(id))
        }
    }
};

BigTask = connect(mapStateToProps, mapDispatchToProps)(BigTask);

export default BigTask