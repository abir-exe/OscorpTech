/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form";

const JoinAsAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
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
        </div>
         {/* company logo  */}
         <div className="form-control w-2/3 my-6">
            <label className="label">
              <span className="label-text">Company Logo*</span>
            </label>
            <input
              {...register("companyLogo")}
              type="file"
              className="file-input w-full max-w-xs"
            />
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
              >
                <option disabled value="default">
                  Select a Package
                </option>
                <option value="packageOne">5 Members for $5</option>
                <option value="packageTwo">10 Members for $8</option>
                <option value="packageThree">20 Members for $15</option>
              </select>
            </div>
        
        
        <button className="btn btn-outline w-1/4">
          Sign Up 
        </button>
      </form>
    </div>
  );
};

export default JoinAsAdmin;
