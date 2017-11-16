import vue from 'vue'
import axios from 'axios'
import router from './router'

const axiosIntance=axios.create({
	baseURL:'http://192.168.33.67:8080',
	headers:{
		'Content-Type':'application/json',
	},
	withCredntals:true,
	timeout:5000
});
axiosIntance.interceptors.response.use(
	response=>{
		if(response.data.errorCode===10000){

		};
		return response;
	},
	error=>{
		if(error){

		};
		return Promise.reject(error);
	}
);
export default axiosIntance;