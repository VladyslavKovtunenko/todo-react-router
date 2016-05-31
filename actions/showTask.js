import { CALL_API } from 'redux-api-middleware'

export default function showTask(){
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks',
            method: 'GET',
            types: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    };
}
