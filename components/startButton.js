import React from 'react'
import {Button} from 'react-bootstrap'
import startTask from "../actions/startTask";
import {connect} from 'react-redux'

class StartButton extends React.Component{
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this);
    }

    onclick(e){
        e.preventDefault();
        this.props.del(this.props.id);
    }

    render(){
        return <Button onClick={this.onclick}>Start</Button>
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
            dispatch(startTask(id));
        }
    }
};

StartButton = connect(mapStateToProps, mapDispatchToProps)(StartButton);

export default StartButton
