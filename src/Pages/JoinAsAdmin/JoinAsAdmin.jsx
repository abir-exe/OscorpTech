/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const JoinAsAdmin = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.companyLogo)
      .then(() => {
        //create user entry in database
        const userInfo = {
          name: data.name,
          email: data.email,
          role: "admin",
          companyName: data.companyName,
          companyLogo: data.companyLogo,
          birthDate: data.birthDate,
          package: data.package,


        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to the database");
            reset();
            toast("Sign In As Admin Successful!", {
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
};





  return (
    <div>
      <Helmet>
        <title>Oscorp Tech | Join As Admin</title>
        
      </Helmet>
        <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">// join as Admin</h2>
      {/* form  */}
      <form className="border px-20 py-10 mx-60 my-10" onSubmit={handleSubmit(onSubmit)}>
        
           <div className="flex gap-6">
             {/* name  */}
        <div className="form-control w-1/3 my-6">
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
         <div className="form-control w-2/3 my-6">
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
           </div>
           <div className="flex gap-6">
             {/*company name  */}
        <div className="form-control w-1/3 my-6">
          <label className="label">
            <span className="label-text">Company Name*</span>
          </label>
          <input
            {...register("companyName", { required: true })}
            type="text"
            placeholder="Company Name"
            className="input input-bordered w-full  "
          />
          {errors.companyName?.type === "required" && (
              <p className="text-red-600">Company Name is required</p>
            )}
        </div>
         {/* company logo  */}
         <div className="form-control w-2/3 my-6">
            <label className="label">
              <span className="label-text">Company Logo URL*</span>
            </label>
            <input
              {...register("companyLogo", { required: true })}
              type="text"
              className="input input-bordered w-full  "
            />
            {errors.companyLogo?.type === "required" && (
              <p className="text-red-600">Company Logo is required</p>
            )}
          </div>
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
              <p className="text-red-600">Birth Date is required</p>
            )}
          </div>
        </div>
        {/* packages  */}
        <div className="form-control w-full  my-6">
              <label className="label">
                <span className="label-text">Select a Package*</span>
              </label>
              <select
                defaultValue="default"
                {...register("package", { required: true })}
                className="select select-bordered w-full  "
                required
              >
                <option disabled value="default">
                  Select a Package
                </option>
                <option value="packageOne">5 Members for $5</option>
                <option value="packageTwo">10 Members for $8</option>
                <option value="packageThree">20 Members for $15</option>
              </select>
              {errors.package?.type === "required" && (
              <p className="text-red-600">Please select a package.</p>
            )}
            </div>
        
        
        <button className="btn btn-outline w-1/4">
          Sign Up 
        </button>
      </form>
    </div>
  );
};

export default JoinAsAdmin;
