/* eslint-disable react/jsx-no-comment-textnodes */
import useCustomRequest from "../../../../Hooks/useCustomRequest";


const MyMonthlyRequests = () => {
    const [customRequest] = useCustomRequest();
  console.log(customRequest);
    return (
        <div>
            <div>
                <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">// Requested On This Month</h2>
            
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Asset Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Date</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {customRequest.map((cr, i) => (
                    <tr key={cr._id}>
                      <th>{i + 1}</th>
                      <td>{cr.assetName}</td>
                      <td>{cr.price}</td>
                      <td>{cr.type}</td>
                      <td>Date</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
};

export default MyMonthlyRequests;