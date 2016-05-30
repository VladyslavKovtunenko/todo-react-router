import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'
import TaskTable from './components/taskTable'

const tasks =[
    {
        title: 'hey! ho!',
        description: 'let`s go!'
    },
    {
        title: 'don`t stop me',
        description: 'right now'
    }
];

console.log(tasks);

ReactDOM.render(
    <TaskTable tasks = {tasks}/>,
    document.getElementById('container')
);