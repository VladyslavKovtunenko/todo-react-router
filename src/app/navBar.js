import React from 'react'
import {Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {signOut} from '../actions/user.actions'

class NavBar extends React.Component {

    render() {

        let firstButton = {},
            secondButton = {};

        if (this.props.isLogin){
            firstButton = {
                path: "/tasks",
                value: "Tasks"
            };
            secondButton = {
                path: "/",
                value: "Sing out",
                onClick: () => {
                    this.props.signOut();
                }
            };
        } else {
            firstButton = {
                path: "/signIn",
                value: "Sign in"
            };
            secondButton = {
                path: "/signUp",
                value: "Sign up",
                onClick: () => {}
            };
        }

        // onClick={secondButton.onClick}
        
        return (
            <Nav bsStyle="pills" stacked activeKey={1}>
                <Link to="/">
                    <Button bsSize="large">Home</Button>
                </Link>
                <Link to={firstButton.path}>
                    <Button bsSize="large">{firstButton.value}</Button>
                </Link>
                <Link to={secondButton.path} onClick={secondButton.onClick}>
                    <Button bsSize="large" >{secondButton.value}</Button>
                </Link>
            </Nav>
        )
    }
}

const mapStateToProps = ({isLogin}) => {
    return {
        isLogin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut())
        }
    };
};

NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBar
