import React from 'react'
import TaskTable from './taskTable'
import AddTask from './addTask'
import {Grid, Row, Col} from 'react-bootstrap'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'


class Links extends React.Component {
    render() {
        return(
            <div>
                <Link to="/tasks">Tasks</Link>
                <Link to="/tasks/new">New task</Link>
            </div>
        )
    }
}

class Tasks extends React.Component {
    render() {
        return (
            <div>
                <h2>My task list</h2>
                <TaskTable/>
            </div>
        )
    }
}

class NewTask extends React.Component {
    render() {
        return (
            <div>
                <h2>New task</h2>
                <AddTask/>
            </div>
        )
    }
}

/*class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>Index!</h2>
            </div>
        )
    }
}*/

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Links}>
                    <IndexRoute >
                        <Route path="tasks" component={Tasks}/>
                        <Route path="tasks/new" component={NewTask}/>
                    </IndexRoute>
                </Route>
            </Router>
        )
    }
}

export default App

/*<Grid>
<Row className="show-grid">
 <Col md={1}></Col>
 <Col md={5}>

 </Col>
    </Row>
    </Grid>*/
