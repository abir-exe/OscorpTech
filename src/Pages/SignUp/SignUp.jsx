import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosSecure";

const SignUp = () => {
  const { googleSignIn, createUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const axiosPublic = useAxiosPublic();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name, image)
      .then(() => {
        // create user entry in database
        const userInfo = {
          name,
          email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to the database");
            
            toast("Sign Up Successful!", {
              icon: "👏",
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.log(error)
        
      });
  });
  }
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      toast.success("Successfully Signed in!");
      navigate(from, { replace: true });
      const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
          console.log(res.data);
          navigate('/');
      })
    });
  };

  return (
    <div>
      <div className="w-4/5 md:3/4 lg:w-2/4 mx-auto py-20 border my-10 px-20">
        <h2 className="text-4xl text-center font-bold">Please SignUp</h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              name="image"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* {loginError && <p className="text-red-600"> {loginError} </p>}
          {success && <p className="text-green-600">Login Successful</p>} */}

          <div className="form-control md:mt-3 lg:mt-6">
            <button className="btn btn-outline">Login</button>
          </div>
        </form>
        <p className="text-center mt-3 mb-3">
          Already have an account? Please
          <Link className="text-sm font-bold text-blue-600 ml-1" to="/login">
            Login
          </Link>
        </p>
        <div
          onClick={handleGoogleSignIn}
          className="flex text-sm md:text-md lg:text-xl justify-center items-center gap-2 border w-4/5 mx-auto px-3  py-2"
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <button className="">Login With google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
