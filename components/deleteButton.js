import React from 'react'
import {Button} from 'react-bootstrap'
import deleteTask from "../actions/deleteTask";
import showTask from "../actions/showTask";
import {connect} from 'react-redux'

class DeleteButton extends React.Component{
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this);
    }
    
    onclick(e){
        e.preventDefault();
        this.props.del(this.props.id);
    }
    
    render(){
        return <Button onClick={this.onclick}>Delete</Button>
    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        del: (id) => {
            dispatch(deleteTask(id));
            dispatch(showTask());
        }
    }
};

DeleteButton = connect(mapStateToProps, mapDispatchToProps)(DeleteButton);

export default DeleteButton