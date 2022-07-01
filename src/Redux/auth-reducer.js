import {authAPI} from "../api/api";

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
            return {
                ...state,
                ...action.payload

            }


        default:
            return state;
    }
}
export default authReducer;
export const setAuthUserData = (email, userId, login, isAuth) => {
    return {
        type: SET_USER_DATA, payload: {email, userId, login, isAuth}
    }
}
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data;
                dispatch(setAuthUserData(email, id, login, true));
            }
        })
    }
}
export const login = (email, password, rememberMe, setStatus, setSubmitting) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        setStatus(response.data.messages)
    }
    ;
    setSubmitting(false);


}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}