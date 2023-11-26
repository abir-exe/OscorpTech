import { Link } from "react-router-dom";

const Navbar = () => {

    const navOptions = (
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
              <li>
            <Link to="/login">Login</Link>
          </li>
            </ul>
      );


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="w-16 rounded-full" src="https://i.ibb.co/LN5pHHN/logo.png" alt="" />
        </div>
        <div className="flex-none gap-2">
          <div className="flex list-none gap-10 font-bold text-sm mr-10">
            {navOptions}
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/gwtNLw4/ronaldo-and-real-madrid.jpg"
                />
              </div>
            </label>
            {navDropOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
