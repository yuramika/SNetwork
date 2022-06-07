const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger;
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;
    }
}
export default authReducer;
export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login}
    }
}