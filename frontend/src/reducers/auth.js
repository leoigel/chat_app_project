import {LOGIN,REGISTER,LOGOUT,UPDATE_USER} from '../constants/userConstant';

console.log('rererere')
const  initialState = {
    user:JSON.parse(localStorage.getItem('user'))||{},
    token:JSON.parse(localStorage.getItem('token'))||'',
    isLogged:localStorage.getItem('user')?true:false
}
const authReducer = (state=initialState, action) => {
    const {type,payload} = action;
    switch(type) {
        case LOGIN:
            return {
                ...state,
                user:payload,
                token:payload.token,
                isLogged:true
            }
        case REGISTER:
             return {
                ...state,
                user:payload,
                token:payload.token,
                isLogged:true
                }
        case LOGOUT:
             return {
                user:{},
                token:'',
                isLogged:false
             }
        case UPDATE_USER:
            return {
                ...state,
                user:payload
            }
        default:
            return state
    }
}

export  {authReducer};