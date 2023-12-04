import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, loading, updateUserProfile } = useAuth();
  console.log(user);

  if(loading){
    <p>.....................</p>
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.displayName.value;
    const photoURL = form.photoURL.value;
    console.log(name, photoURL);
    updateUserProfile(name, photoURL).then((result) => {
    //   const user = result.user;
      console.log(result.user);
      toast.success("Successfully Updated");
    });
  };

  return (
    <div>
        <Helmet>
        <title>Oscorp Tech | Profile</title>
        
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold italic">
              Full Name:
              <span className="italic text-3xl ">{user.displayName}</span>
            </h1>
            <p className="py-6 italic">
              Email:{" "}
              <span className="italic border-b-2 border-black">
                {user.email}
              </span> (non-editable)
            </p>
            <p className="py-3 italic">
              Date of Birth:
              <span className="italic text-sm border-black">
                 {
                    user?.date ? user.date : <> N/A</>
                }
              </span>
            </p>
            
            
          </div>
          <form onSubmit={handleUpdate} className="p-3 border">
                <input type="text" className="py-2 border-black my-2" name="displayName" placeholder="Enter New Name" /> <br />
                <input type="text" className="py-2 border-black my-2" name="photoURL" placeholder="Enter Photo URL" /> <br />
                <input className="btn btn-sm btn-outline" type="submit" value="Update" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
