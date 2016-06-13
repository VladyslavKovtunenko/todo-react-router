import React from 'react'
import NavBar from '../app/navBar'
import {connect} from 'react-redux'
import {Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {editTask, getTask} from "../actions/task.actions";

class EditTask extends React.Component{
    constructor(props){
        super(props);

        let id = this.props.params.id;
        this.props.getTask(id);

        this.state = {
            name: 'Title',
            description: 'Description'
        };

        this.path = "/tasks/" + id;
        this.save = this.save.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.task.name,
            description: nextProps.task.description
        });
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
        this.props.editTask(task, this.props.params.id);
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

const mapStateToProps = ({task}) => {
    return {
        task
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editTask: (task, id) => {
            dispatch(editTask(task, id));
        },
        getTask: (id) => {
            dispatch(getTask(id))
        }
    };
};

EditTask = connect(mapStateToProps, mapDispatchToProps)(EditTask);

export default EditTask
