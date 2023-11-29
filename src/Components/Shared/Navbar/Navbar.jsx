import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {

  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully signed out!");
      })
      .catch((error) => console.log(error));
  };

  //get admin value from database 
  const isAdmin = true;

    const navOptions = (
        <div className="flex list-none gap-10 font-bold text-sm mr-10">
          {
            user ? <>
            <li>
            <Link to="/">Home</Link>
          </li>
            <li>
            <Link to="/myAssets">My Assets</Link>
          </li>
            <li>
            <Link to="/myTeam">My Team</Link>
          </li>
            <li>
            <Link to="/requestForAnAsset">Request For an Asset</Link>
          </li>
            <li>
            <Link to="/makeACustomRequest">Make a custom request</Link>
          </li>
            <li>
            <Link to="/profile">Profile</Link>
          </li>
              {
                isAdmin ? <> <li>
                <Link to="/admin/assetList">Asset List</Link>
              </li>
                <li>
                <Link to="/admin/addAnAsset">Add An Asset</Link>
              </li>
                <li>
                <Link to="/admin/allRequests">All Requests</Link>
              </li></> : <></>
              }
           
            </>
             : 
            <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/joinAsEmployee">Join As Employee</Link>
          </li>
          <li>
            <Link to="/joinAsAdmin">Join As Admin</Link>
          </li>
          </>
          }
        </div>
      );
    const navDropOptions = (
        <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {
                !user ? 
                <li>
            <Link to="/login">Login</Link>
          </li> :
          <li onClick={handleLogOut}>
          <Link>LogOut</Link>
        </li>
              }
          
        
      
            </ul>
      );

      

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
         {
          user ? <img className="w-16 rounded-full" src={user.photoURL} alt="" /> 
          :
          <img className="w-16 rounded-full" src="https://i.ibb.co/LN5pHHN/logo.png" alt="" />
         }
          
        </div>
        <div className="flex-none gap-2">
          <div className="">
            {navOptions}
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user ? 
                  <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL}
                />
                :
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/gwtNLw4/ronaldo-and-real-madrid.jpg"
                />
                
                }
              </div>
            </label>
              
            {navDropOptions}
          </div>
          <div className="font-semibold">USER: {user ? <span className="text-blue-400">{user.displayName}</span> : <span className="text-red-400">N/A</span>}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
