import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

/* eslint-disable react/jsx-no-comment-textnodes */
const MyAssets = () => {
  const axiosSecure = useAxiosSecure();

  const { data: assets = [] } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/assets");
      return res.data;
    },
  });

  return (
    <div className="my-10">
      <Helmet>
        <title>Oscorp Tech | My Assets</title>
        
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
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Request Status</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={asset._id}>
                <th>{index + 1}</th>
                <td>{asset.assetName}</td>
                <td>{asset.assetType}</td>
                <td>{asset.requestDate}</td>
                <td>{asset.approvalDate}</td>
                <td>{asset.requestStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssets;
