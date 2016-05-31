import { CALL_API } from 'redux-api-middleware'

export default function deleteTask(id){
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:8080/api/v1/tasks/' + id,
            method: 'DELETE',
            types: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    };
}