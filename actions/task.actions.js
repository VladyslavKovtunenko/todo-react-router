import fetch from 'isomorphic-fetch';

export function add(task) {
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

import { CALL_API } from 'redux-api-middleware';

export function deleteTask(id){
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks/' + id,
            method: 'DELETE',
            types: ['DELETE_REQUEST', 'DELETE_SUCCESS', 'DELETE_FAILURE']
        }
    };
}

export function showTask(){
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks',
            method: 'GET',
            types: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    };
}

export function startTask(id){
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks/' + id + '/start',
            method: 'PATCH',
            types: ['START_REQUEST', 'START_SUCCESS', 'START_FAILURE']
        }
    };
}
export function endTask(id){
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks/' + id + '/finish',
            method: 'PATCH',
            types: ['FINISH_REQUEST', ' FINISH_SUCCESS', ' FINISH_FAILURE']
        }
    };
}