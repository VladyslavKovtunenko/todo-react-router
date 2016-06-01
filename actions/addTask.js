import fetch from 'isomorphic-fetch';

export default function add(task) {
    fetch('http://localhost:8080/api/v1/tasks/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    return {type: 'SEND'};
}