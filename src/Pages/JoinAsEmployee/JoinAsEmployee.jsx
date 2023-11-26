/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form";

const JoinAsEmployee = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
        <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">// join as employee</h2>
      {/* form  */}
      <form className="border px-20 py-10 mx-60 my-10" onSubmit={handleSubmit(onSubmit)}>
        
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
          </div>
        
        <div className="flex gap-6">
         
          {/* price  */}
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
          {/* price  */}
          <div className="form-control flex-1 my-6">
            <label className="label">
              <span className="label-text">Date*</span>
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              placeholder="Date"
              className="input input-bordered w-full  "
            />
          </div>
        </div>
        
        
        <button className="btn btn-outline w-1/4">
          Sign Up 
        </button>
      </form>
    </div>
  );
};

export default JoinAsEmployee;
