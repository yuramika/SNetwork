import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
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
export const login = (email, password, rememberMe, setStatus, setSubmitting, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl(captcha))
        }
        setStatus(response.data.messages)
    }
    setSubmitting(false);
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
     const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))

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