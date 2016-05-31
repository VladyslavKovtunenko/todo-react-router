export const todo = (state = [], action) => {
    switch (action.type){
        case 'SHOW_TASKS':
            return action.tasks;
        default:
            return state;

    }
};