import React from 'react'
import {Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import NavBar from './navBar'
import {connect} from 'react-redux'
import {signUp} from '../actions/user.actions'

class SingUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass: '',
            confPass: ''
        };

        this.send = this.send.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    }

    changeEmail(e){
        e.preventDefault();
        this.setState({ email: e.target.value });
    }

    changePassword(e){
        e.preventDefault();
        this.setState({ pass: e.target.value });
    }
    
    changeConfirmPassword(e){
        e.preventDefault();
        this.setState({ confPass: e.target.value });
    }

    send(){
        
        if(this.state.pass !== this.state.confPass){
            alert('error'); //work on error
        }
        
        let user = {
            email: this.state.email,
            password: this.state.pass
        };


        this.setState({
            email: '',
            pass: '',
            confPass: ''
        });

        this.props.signUp(user);
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={8}>
                        <h2>Sing Up</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2}>
                        <NavBar/>
                    </Col>
                    <Col md={1}/>
                    <Col md={8}>
                        <form>
                            <FormGroup>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.changeEmail}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    value={this.state.pass}
                                    onChange={this.changePassword}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Confirm password</ControlLabel>
                                <FormControl
                                    type="password"
                                    value={this.state.confPass}
                                    onChange={this.changeConfirmPassword}
                                />
                            </FormGroup>
                            <Button onClick={this.send}>
                                Send
                            </Button>
                        </form>
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
        signUp: (user) => {
            dispatch(signUp(user));  //need to create and import
        }
    }
};

SingUp = connect(mapStateToProps, mapDispatchToProps)(SingUp);


export default SingUp
