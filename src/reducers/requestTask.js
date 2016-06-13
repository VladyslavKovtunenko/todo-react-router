export const todo = (state = {}, action) => {
    switch (action.type){
        case 'GET_SUCCESS':
            return action.payload.task;
        default:
            return state;
    }
};