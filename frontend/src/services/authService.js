import Api from './api';

const AuthService = {
    login:async (dataLogin) => {
       try{
        const {data} = await Api.post('/login',dataLogin);
        Api.defaults.headers['Authorization'] = `Bearer ${data.token}`
        return data;
       }catch(e) {
           console.log(e)
       }
    },
    register: async (dataRegister) => {
        try{
            const {data} = await Api.post('/register',dataRegister);
            Api.defaults.headers['Authorization'] = `Bearer ${data.token}`
            return data;
           }catch(e) {
               console.log(e)
           }
    },
    logout: () => {
        Api.defaults.headers['Authorization'] = ''
    },
    updateUser: async (formData) => {
        try{
            const config = {     
                headers: { 'Content-type': 'multipart/form-data' }
            }
            const {data} = await Api.post('/update',formData,config);
            Api.defaults.headers['Authorization'] = `Bearer ${data.token}`
           
            return data;
           }catch(e) {
               console.log(e)
           }
    }
}
export default AuthService