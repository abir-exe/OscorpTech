/* eslint-disable react/jsx-no-comment-textnodes */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useAuth from "../../../Hooks/useAuth";

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

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const Info = form.additionalInfo.value;
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    console.log(Info, formattedDate)
  }


  return (
    <div className="my-10">
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
            {assets.map((asset, index) => (
              <tr key={asset._id}>
                <th>{index + 1}</th>
                <td>{asset.assetName}</td>
                <td>{asset.assetType}</td>
                <td>{asset.availability}</td>
                <td>
                  {asset.availability === "Out of Stock" ? (
                    <button className="btn btn-sm btn-outline btn-disabled">
                      Request
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Request
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal  */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Confirming Your Request!</h3>
    <form onSubmit={handleSubmitRequest}>
    <textarea className="textarea textarea-success mt-5 w-full" name="additionalInfo" placeholder="Please add additional informations" type="text" />
            <br />
            <input method="dialog" className=" btn btn-outline justify-center mt-14" type="submit" value="Request" />
    </form>
  </div>
</dialog>

      <h3 className="font-bold text-lg"></h3>

      
    </div>
  );
};

export default RequestForAnAsset;
