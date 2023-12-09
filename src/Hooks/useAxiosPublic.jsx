
import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://oscorp-tech-asset-management-server.vercel.app/'
})


const useAxiosPublic = () => { 
    return axiosPublic
};

export default useAxiosPublic;