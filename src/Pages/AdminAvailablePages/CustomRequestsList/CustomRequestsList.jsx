/* eslint-disable react/jsx-no-comment-textnodes */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const CustomRequestsList = () => {

  const axiosSecure = useAxiosSecure();
  
  const { data: customRequests = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/customRequests");
      return res.data;
    },
  });

  return (
    <div>
        <Helmet>
        <title>Oscorp Tech | Custom Requests List</title>
        
      </Helmet>
      <h2 className="text-5xl text-center my-10 border-x-2 py-5 font-bold uppercase">
        // Custom Requests List
      </h2>
    
      {/* table  */}
      <div className="overflow-x-auto my-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Price</th>
              <th>Asset Type</th>
              <th>Asset Image</th>
              <th>Why you need this</th>
              <th>Additional Information</th>
              <th>Approval</th>
              <th>Rejection</th>
            </tr>
          </thead>
          <tbody>
            {
              customRequests.map((request, index) =>  <tr key={request._id}>
              <th>{index + 1}</th>
              <td>{request.assetName}</td>
              <td>{request.price}</td>
              <td>{request.type}</td>
              <td>
              <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={request.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
              </td>
              <td>{request.whyYouNeedThis}</td>
              <td>{request.additionalInfo}</td>
              
              <td><button className="btn btn-sm btn-outline">Approve</button></td>
              <td><button className="btn btn-sm btn-outline">Reject</button></td>
            </tr>)
            }
           
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default CustomRequestsList;
