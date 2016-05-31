export const todo = (state = [], action) => {
    switch (action.type){
        case 'SUCCESS':
            console.log(action);
            return action.payload.tasks;
        case 'FAILURE':
            console.log(action);
            return state;
        default:
            console.log(action);
            return state;

    }
};