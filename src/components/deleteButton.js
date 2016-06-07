import React from 'react'
import {Button} from 'react-bootstrap'

class DeleteButton extends React.Component {
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this);
        console.log(props);
    }
    
    onclick(e) {
        e.preventDefault();
        this.props.deleteTask(this.props.id);
    }
    
    render() {
        return <Button onClick={this.onclick}>Delete</Button>
    }
}

export default DeleteButton