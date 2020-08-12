import axios from 'axios';

 export const axiosWithAuth =( ) => {
    try {
        const token = JSON.parse(localStorage.getItem('token'));
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000' 
    })
}catch(e){
    console.log(e)
}
}

export default axiosWithAuth;