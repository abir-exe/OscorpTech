import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {

    const { id } = useParams();
  console.log(id);

  const customRequests = useLoaderData();
  console.log(customRequests);

  const foundRequest = customRequests.find((request) => request._id === id);
  console.log(foundRequest);

    return (
        <div>
            <h2>name: {foundRequest.assetName}</h2>
        </div>
    );
};

export default ViewDetails;