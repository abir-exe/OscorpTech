/* eslint-disable react/jsx-no-comment-textnodes */
import useCustomRequest from "../../../../Hooks/useCustomRequest";

const MyPendingRequests = () => {
  const [customRequest] = useCustomRequest();
  console.log(customRequest);
  return (
    <div>
        {
            customRequest.length > 0 ? <div>
                <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">// My Pending Requests</h2>
            
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Asset Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {customRequest.map((cr, i) => (
                    <tr key={cr._id}>
                      <th>{i + 1}</th>
                      <td>{cr.assetName}</td>
                      <td>{cr.price}</td>
                      <td>{cr.type}</td>
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

export default MyPendingRequests;
