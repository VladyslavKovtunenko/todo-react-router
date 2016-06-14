import { CALL_API } from 'redux-api-middleware';

export function signIn(user) {
    console.log(JSON.stringify(user));
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/signin',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            types: ['SING_IN_REQUEST', 'SING_IN_SUCCESS', 'SING_IN_FAILURE']
        }
    }
}

export function signUp(user) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/sign_up',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            types: ['SING_UP_REQUEST', 'SING_UP_SUCCESS', 'SING_UP_FAILURE']
        }
    }
}

export function signOut() {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/signout',
            method: 'DELETE',
            types: ['SING_OUT_REQUEST', 'SING_OUT_SUCCESS', 'SING_OUT_FAILURE']
        }
    }
}