export const todo = (state = {tasks: [], authorization: false}, action) => {
    switch (action.type){
        case 'SUCCESS':
            return {
                tasks: action.payload.tasks,
                authorization: state.authorization
            };
        case 'SING_IN_SUCCESS':
            return {
                tasks: state.tasks,
                authorization: true
            };
        default:
            return state;
    }
};