import React from 'react'
import {signIn} from '../actions/user.actions'
import {Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import NavBar from './navBar'
import {connect} from 'react-redux'

class SingIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass: ''
        };

        this.send = this.send.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeEmail(e){
        e.preventDefault();
        this.setState({ email: e.target.value });
    }

    changePassword(e){
        e.preventDefault();
        this.setState({ pass: e.target.value });
    }

    send(){
        let user = {
            email: this.state.email,
            password: this.state.pass
        };


        this.setState({
            email: '',
            pass: ''
        });

        this.props.signIn(user);
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}/>
                    <Col md={8}>
                        <h2>Sing In</h2>
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
        signIn: (user) => {
            dispatch(signIn(user));
        }
    }
};

SingIn = connect(mapStateToProps, mapDispatchToProps)(SingIn);

export default SingIn
