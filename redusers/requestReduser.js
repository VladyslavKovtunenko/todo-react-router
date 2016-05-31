export const todo = (state = [], action) => {
    switch (action.type){
        case 'SUCCESS':
            console.log(action);
            return [];
        case 'FAILURE':
            console.log(action);
            return [];
        default:
            return state;

    }
};