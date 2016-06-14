export default (state = JSON.parse(window.sessionStorage.getItem('isLogin')), action) => {
    switch (action.type){
        case 'SING_IN_SUCCESS':
            window.sessionStorage.setItem('isLogin', true);
            return true;
        case 'SING_IN_FAILURE':
            window.sessionStorage.setItem('isLogin', false);
            return false;
        case 'SING_OUT_REQUEST':
            window.sessionStorage.setItem('isLogin', false);
            return false;
        default:
            return state;
    }
};