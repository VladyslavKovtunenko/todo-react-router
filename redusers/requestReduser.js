export const todo = (state = [], action) => {
    switch (action.type){
        case 'SUCCESS':
            return action.payload.tasks;
        case 'FAILURE':
            return state;
        default:
            return state;
    }
};