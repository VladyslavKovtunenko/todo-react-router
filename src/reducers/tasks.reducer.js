export default (state = [], action) => {
    switch (action.type){
        case 'SUCCESS':
            return action.payload.tasks;
        default:
            return state;
    }
};