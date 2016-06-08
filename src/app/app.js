import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Tasks from './tasks'
import NewTask from './newTask'
import Home from './home'
import SingIn from './singIn'
import bigTask from "../tasks/bigTask"

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" >
                    <IndexRoute component={Home}/>
                    <Route path="signIn" component={SingIn}/>
                    <Route path="tasks" component={Tasks}>
                        <Route path="tasks/{:id}" component={bigTask}/>
                    </Route>
                    <Route path="tasks/new" component={NewTask}/>
                </Route>
            </Router>
        )
    }
}

export default App
