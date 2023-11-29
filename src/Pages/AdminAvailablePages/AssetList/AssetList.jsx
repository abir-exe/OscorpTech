/* eslint-disable react/jsx-no-comment-textnodes */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssetList = () => {

  const axiosSecure = useAxiosSecure();
  
  const { data: assets = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/assets");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">
        // Asset List
      </h2>
      {/* search sort filter  */}
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
      {/* list  */}
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Product Type</th>
        <th>Product Quantity</th>
        <th>Date Added</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        assets.map((asset, index) => <tr key={asset._id}>
        <th>{index + 1}</th>
        <td>{asset.assetName}</td>
        <td>{asset.assetType}</td>
        <td>{asset.quantity}</td>
        <td>{asset.dateAdded}</td>
        <td><button className="btn btn-sm btn-outline">Update</button></td>
        <td><button className="btn btn-sm btn-outline">Delete</button></td>
      </tr>)
      }
      
      
    </tbody>
  </table>
</div>
  
    </div>
  );
};

export default AssetList;
