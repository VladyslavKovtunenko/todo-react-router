import React from 'react'
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import {showTask, add} from "../actions/task.actions";
import {connect} from 'react-redux'
import {Link} from 'react-router'

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        };

        this.send = this.send.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }

    changeTitle(e){
        e.preventDefault();
        this.setState({ title: e.target.value });
    }

    changeDescription(e){
        e.preventDefault();
        this.setState({ description: e.target.value });
    }

    send(){
        const task = {
            name: this.state.title,
            description: this.state.description
        };

        this.props.addTask(task);
        this.setState({
            title: '',
            description: ''
        });
    }

    render(){
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value={this.state.title}
                        onChange={this.changeTitle}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        placeholder="textarea"
                        value={this.state.description}
                        onChange={this.changeDescription}
                    />
                </FormGroup>
                <Link to="/tasks">
                    <Button onClick={this.send}>
                        Send
                    </Button>
                </Link>
            </form>
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
        addTask: (task) => {
            dispatch(add(task));
            dispatch(showTask());
        }
    }
};

AddTask = connect(mapStateToProps, mapDispatchToProps)(AddTask);

export default AddTask
