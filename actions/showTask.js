import { CALL_API } from 'redux-api-middleware'

export default function showTask(){
    return {
        [CALL_API]: {
            endpoint: 'http://tasks-for-day.herokuapp.com:80/api/v1/tasks',
            method: 'GET',
            type: ['SUCCESS', 'FAILURE']
        }
    };
}