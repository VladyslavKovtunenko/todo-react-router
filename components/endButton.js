import React from 'react'
import {Button} from 'react-bootstrap'
import endTask from "../actions/endTask";
import {connect} from 'react-redux'

class EndButton extends React.Component{
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this);
    }

    onclick(e){
        e.preventDefault();
        this.props.del(this.props.id);
    }

    render(){
        return <Button onClick={this.onclick}>End</Button>
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
            dispatch(endTask(id));
        }
    }
};

EndButton = connect(mapStateToProps, mapDispatchToProps)(EndButton);

export default EndButton
