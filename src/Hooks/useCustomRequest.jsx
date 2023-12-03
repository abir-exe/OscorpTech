import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCustomRequest = () => {
    
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: customRequest = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/customRequests?email=${user.email}`);
            return res.data;
        }
    })
    return [customRequest, refetch]
};

export default useCustomRequest;