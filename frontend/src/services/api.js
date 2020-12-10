import axios from 'axios';

export default axios.create({
    baseUrl:'/',
    headers: {
        'Accept':'application.json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')) || ''}`
    }
})