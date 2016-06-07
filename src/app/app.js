import React from 'react'
import TaskTable from '../tasks/taskTable'
import AddTask from '../tasks/addTask'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'


/*class Links extends React.Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}*/

class Tasks extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={1}/>
                    <Col md={7}>
                        <h2>My task list</h2>
                        <TaskTable/>
                        <Link to="/tasks/new"><Button>New task</Button></Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

class NewTask extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={1}/>
                    <Col md={7}>
                        <h2>New task</h2>
                        <AddTask/>
                        <Link to="/tasks"><Button>Back</Button></Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" >
                    <IndexRoute component={Tasks}/>
                    <Route path="tasks" component={Tasks}/>
                    <Route path="tasks/new" component={NewTask}/>
                </Route>
            </Router>
        )
    }
}

// component={Links}

export default App