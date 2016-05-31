import React from 'react'
import ReactDOM from 'react-dom'
import TaskTable from './components/taskTable'
import {createStore} from 'redux'
import {CALL_API} from 'redux-api-middleware'
import {todo} from "./redusers/reduser";
/*{
[CALL_API]: {
    endpoint: 'http://www.example.com/api/users',
        method: 'GET',
        types: ['REQUEST', 'SUCCESS', 'FAILURE']
}
}*/

const store = createStore(todo);

ReactDOM.render(
    <TaskTable />,
    document.getElementById('container')
);
