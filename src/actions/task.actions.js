import { CALL_API } from 'redux-api-middleware';

export function add(task) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
            types: ['ADD_REQUEST', 'ADD_SUCCESS', 'ADD_FAILURE']
        }
    }
}

export function editTask(task, id) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks/' + id,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
            types: ['EDIT_REQUEST', 'EDIT_SUCCESS', 'EDIT_FAILURE']
        }
    }
}

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
            types: ['END_REQUEST', ' END_SUCCESS', ' END_FAILURE']
        }
    };
}

export function getTask(id){
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks/' + id,
            method: 'GET',
            types: ['GET_REQUEST', 'GET_SUCCESS', ' GET_FAILURE']
        }
    };
}
