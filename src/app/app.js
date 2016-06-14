import './app.scss'
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Tasks from './tasks'
import NewTask from './newTask'
import Home from './home'
import SingIn from './signIn'
import SingUp from './signUp'
import BigTask from '../tasks/bigTask'
import EditTask from '../tasks/editTask'

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" >
                    <IndexRoute component={Home}/>
                    <Route path="login" component={SingIn}/>
                    <Route path="registration" component={SingUp}/>
                    <Route path="tasks" component={Tasks}/>
                    <Route path="tasks/new" component={NewTask}/>
                    <Route path="tasks/:id" component={BigTask}/>
                    <Route path="tasks/:id/edit" component={EditTask}/>
                </Route>
            </Router>
        )
    }
}

export default App
