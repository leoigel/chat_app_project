import {UPDATE_USER} from '../constants/userConstant';
import AuthService from '../services/authService';

export const updateUser = (params) => async (dispatch) => {
    const data = await AuthService.updateUser(params) 
    localStorage.setItem('user',JSON.stringify(data))
    dispatch({
        type:UPDATE_USER,
        payload:data
    })
}