/* eslint-disable react/jsx-no-comment-textnodes */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useAuth from "../../../Hooks/useAuth";
import RequestRow from "./RequestRow";
import { Helmet } from "react-helmet-async";

const RequestForAnAsset = () => {
  const axiosSecure = useAxiosSecure();

  const { data: assets = [] } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/assets");
      return res.data;
    },
  });

  const {user} = useAuth();
  console.log(user)

  


  return (
    <div className="my-10">
      <Helmet>
        <title>Oscorp Tech | Request For An Asset</title>
        
      </Helmet>
      <div className="items-center text-center mb-5">
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
      <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">
        // Asset List
      </h2>
      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <RequestRow key={asset._id} asset={asset}></RequestRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal  */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}



      

      
    </div>
  );
};

export default RequestForAnAsset;
