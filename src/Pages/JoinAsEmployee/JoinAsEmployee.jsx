/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const JoinAsEmployee = () => {
  // const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, googleSignIn } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          //create user entry in database
          // const userInfo = {
          //   name: data.name,
          //   email: data.email,
          // };
          // axiosPublic.post("/users", userInfo).then((res) => {
          //   if (res.data.insertedId) {
          //     console.log("user added to the database");
              reset();
              toast("Sign In Successful!", {
                icon: "👏",
              });
              navigate("/");
          //   }
          // });
        })
        .catch((error) => console.log(error));
    });
  };

  
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      toast.success("Successfully Signed in!");
      navigate(from, { replace: true });
      // const userInfo = {
      //     email: result.user?.email,
      //     name: result.user?.displayName
      // }
      // axiosPublic.post('/users', userInfo)
      // .then(res => {
      //     console.log(res.data);
      //     navigate('/');
      // })
    });
  };

  return (
    <div>
      <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">
        // join as employee
      </h2>
      {/* form  */}
      <div className="border px-20 py-10 mx-60 my-10">
      <form
        
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* name  */}
        <div className="form-control  my-6">
          <label className="label">
            <span className="label-text">Full Name*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full  "
          />
          {errors.name?.type === "required" && (
              <p className="text-red-600">Name is required</p>
            )}
        </div>
        {/* email  */}
        <div className="form-control  my-6">
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Email"
            className="input input-bordered w-full  "
          />
          {errors.email?.type === "required" && (
              <p className="text-red-600">Email is required</p>
            )}
        </div>
        {/* Photo URL  */}
        <div className="form-control  my-6">
          <label className="label">
            <span className="label-text">Photo URL*</span>
          </label>
          <input
            {...register("photoURL", { required: true })}
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full  "
          />
          {errors.photoURL?.type === "required" && (
              <p className="text-red-600">Photo URL is required</p>
            )}
        </div>

        <div className="flex gap-6">
          {/* pass  */}
          <div className="form-control w-2/4 my-6">
            <label className="label">
              <span className="label-text">Password*</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full  "
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Password must be at least 6 characters
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>
          {/* date  */}
          <div className="form-control flex-1 my-6">
            <label className="label">
              <span className="label-text">Date of Birth*</span>
            </label>
            <input
              {...register("birthDate", { required: true })}
              type="date"
              placeholder="Birth Date"
              className="input input-bordered w-full  "
            />
            {errors.birthDate?.type === "required" && (
              <p className="text-red-600">Please enter birth date</p>
            )}
          </div>
        </div>
        <button className="btn btn-outline w-1/4">Sign Up</button>
      </form>
      <div
          onClick={handleGoogleSignIn}
          className="flex text-sm md:text-md lg:text-xl justify-center items-center gap-2 border w-4/5 mx-auto px-3 mt-10 py-2"
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <button className="">Login With google</button>
        </div>
      </div>
    </div>
  );
};

export default JoinAsEmployee;
