/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const RequestRow = ({asset}) => {

    

    const {_id, assetName, price, assetType, availability, assetImageUrl, whyNeed, additionalInfo} = asset;

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const info = form.additionalInfo.value;
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        
        console.log(info, formattedDate)
      if(user && user.email){
        //send data to the database
        
        const requestedAsset = {
            email: user.email,
          menuId: _id,
          assetName,
          assetType,
          price,
          availability,
          assetImageUrl,
          whyNeed,
          additionalInfo,
          info : info,
          date: formattedDate
        }
        console.log(requestedAsset);
        axiosSecure.post('/allRequests', requestedAsset)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            toast('Requested granted!', {
              icon: '👏',
            });
           

          }
        })

      }
      
    }

    return (
        <tr key={asset._id}>
                <th></th>
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
                <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Confirming Your Request!</h3>
    <form onSubmit={handleRequest}>
    <textarea className="textarea textarea-success mt-5 w-full" name="additionalInfo" placeholder="Please add additional informations" type="text" />
            <br />
            <input method="dialog" className=" btn btn-outline justify-center mt-14" type="submit" value="Request" />
    </form>
  </div>
</dialog>
              </tr>
    );
};

export default RequestRow;