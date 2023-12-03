/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
import useCustomRequest from "../../../../Hooks/useCustomRequest";

const MyCustomRequests = () => {
  const [customRequest] = useCustomRequest();
  console.log(customRequest);
  return (
    <div>
        {
            customRequest.length > 0 ? <div>
                <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">// My Custom Requests</h2>
            <h2 className="text-3xl">
              My Total Custom Requests: <span className="text-amber-600">{customRequest.length}</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Asset Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customRequest.map((cr, i) => (
                    <tr key={cr._id} custom={cr}>
                      <th>{i + 1}</th>
                      <td>{cr.assetName}</td>
                      <td>{cr.price}</td>
                      <td>{cr.type}</td>
                      <td>Pending</td>
                      <td><Link to={`/viewDetails/${cr._id}`}><button  className="btn btn-sm btn-outline">Details</button></Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          :
          <></>
        }
    </div>
  );
};

export default MyCustomRequests;
