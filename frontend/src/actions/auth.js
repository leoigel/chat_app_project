import {LOGIN,REGISTER,LOGOUT} from '../constants/userConstant';
import AuthService from '../services/authService';

export const login = (params,history) => async (dispatch) => {
    const data = await AuthService.login(params)
    dispatch({
        type:LOGIN,
        payload:data
    })
    localStorage.setItem('user',JSON.stringify(data))
    localStorage.setItem('token',JSON.stringify(data.token))
    if(data) {
        history.push('/')
    }

}
// tt
export const register = (params,history) => async (dispatch) => {
    const data = await AuthService.register(params);
    dispatch({
        type:REGISTER,
        payload:data
    })
    if(data) {
        history.push('/')
    }

}

export const logout = () => (dispatch) => {
    AuthService.logout()
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    dispatch({
        type:LOGOUT,
    })
}