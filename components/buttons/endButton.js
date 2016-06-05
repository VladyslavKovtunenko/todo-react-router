import React from 'react'
import {Button} from 'react-bootstrap'
import {endTask, showTask} from "../../actions/task.actions";
import {connect} from 'react-redux'

class EndButton extends React.Component{
    constructor(props){
        super(props);
        this.onСlick = this.onСlick.bind(this);
    }

    onСlick(e){
        e.preventDefault();
        this.props.end(this.props.id);
    }

    render(){
        return <Button onClick={this.onСlick}>End</Button>
    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        end: (id) => {
            dispatch(endTask(id));
            dispatch(showTask());
        }
    }
};

EndButton = connect(mapStateToProps, mapDispatchToProps)(EndButton);

export default EndButton
