/* eslint-disable react/jsx-no-comment-textnodes */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllRequests = () => {

  const axiosSecure = useAxiosSecure();
  
  const { data: requests = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allRequests");
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Oscorp Tech | All Requests</title>
        
      </Helmet>
      <h2 className="text-5xl text-center my-10 border-x-2 py-5 font-bold uppercase">
        // All Requests
      </h2>
      {/* search sort filter  */}
      <div className="items-center text-center my-5">
        <div className="join ">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              search by name
            </span>
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
      {/* table  */}
      <div className="overflow-x-auto my-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Email of The Requester</th>
              <th>Name of Requester</th>
              <th>Request Date</th>
              <th>Additional Note</th>
              <th>Status</th>
              <th>Approval</th>
              <th>Rejection</th>
            </tr>
          </thead>
          <tbody>
            {
              requests.map((request, index) =>  <tr key={request._id}>
              <th>{index + 1}</th>
              <td>{request.assetName}</td>
              <td>{request.assetType}</td>
              <td>{request.email}</td>
              <td>name</td>
              <td>{request.date}</td>
              <td>{request.additionalInfo}</td>
              <td>Status</td>
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

export default AllRequests;
