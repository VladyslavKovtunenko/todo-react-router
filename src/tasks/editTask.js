import React from 'react'
import NavBar from '../app/navBar'
import {connect} from 'react-redux'
import {Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {editTask} from "../actions/task.actions";

class EditTask extends React.Component{
    constructor(props){
        super(props);

        let url = window.location.href;
        url = url.split('/');
        let id = url[url.length - 2];
        let task = this.props.tasks.filter((task) => {if(task.id == id) return task});

        task = task[0];

        this.state = {
            name: task.name,
            description: task.description,
            id: id
        };

        this.path = "/tasks/" + this.state.id;
        this.save = this.save.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }

    changeTitle(e){
        e.preventDefault();
        this.setState({ name: e.target.value });
    }

    changeDescription(e){
        e.preventDefault();
        this.setState({ description: e.target.value });
    }

    save(){
        const task = {
            name: this.state.name,
            description: this.state.description
        };

        console.log(task);
        this.props.editTask(task, this.state.id);
    }

    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={7}>
                        <h2>Edit task</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2}>
                        <NavBar/>
                    </Col>
                    <Col md={1}/>
                    <Col md={7}>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.name}
                                onChange={this.changeTitle}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                value={this.state.description}
                                onChange={this.changeDescription}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}/>
                    <Col md={7}>
                        <Link to={this.path}>
                            <Button onClick={this.save}>Save</Button>
                        </Link>
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

const mapDispatchToProps = (dispatch) => {
    return {
        editTask: (task, id) => {
            dispatch(editTask(task, id));
        }
    };
};

EditTask = connect(mapStateToProps, mapDispatchToProps)(EditTask);

export default EditTask
