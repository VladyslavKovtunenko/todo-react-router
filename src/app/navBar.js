import React from 'react'
import {Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router'

class NavBar extends React.Component {

    render() {
        return (
            <Nav bsStyle="pills" stacked activeKey={1}>
                <Link to="/">
                    <Button bsSize="large">Home</Button>
                </Link>
                <Link to="/tasks">
                    <Button bsSize="large">Tasks</Button>
                </Link>
                <Link to="/signIn">
                    <Button bsSize="large">Sing in</Button>
                </Link>
            </Nav>
        )
    }
}

export default NavBar
