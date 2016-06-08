// export const todo = (state = {tasks: [], authorization: false}, action) => {
export const todo = (state = [], action) => {
    switch (action.type){
        /*case 'SUCCESS':
            return {
                tasks: action.payload.tasks,
                authorization: state.authorization
            };
        case 'SING_IN_SUCCESS':
            return {
                tasks: state.tasks,
                authorization: true
            };*/
        case 'SUCCESS':
            return action.payload.tasks;
        default:
            return state;
    }
};