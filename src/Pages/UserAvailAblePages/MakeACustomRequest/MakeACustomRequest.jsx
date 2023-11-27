/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form";

const MakeACustomRequest = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">
        // Make a Custom Request
      </h2>
      {/* form  */}
      <div className="border px-20 py-10 mx-60 my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name  */}
          <div className="form-control  my-6">
            <label className="label">
              <span className="label-text">Asset Name*</span>
            </label>
            <input
              {...register("assetName", { required: true })}
              type="text"
              placeholder="Asset Name"
              className="input input-bordered w-full  "
            />
            {errors.assetName?.type === "required" && (
              <p className="text-red-600">Asset Name is required</p>
            )}
          </div>
          <div className="flex justify-between gap-6">
            {/* price  */}
            <div className="form-control w-1/2 my-6">
            <label className="label">
              <span className="label-text">Asset Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full  "
            />
            {errors.price?.type === "required" && (
              <p className="text-red-600">Price is required</p>
            )}
          </div>
            {/* asset type  */}
            <div className="form-control flex-1 my-6">
            <label className="label">
              <span className="label-text">Asset Type*</span>
            </label>
            <input
              {...register("type", { required: true })}
              type="text"
              placeholder="Asset Type"
              className="input input-bordered w-full  "
            />
            {errors.type?.type === "required" && (
              <p className="text-red-600">Asset Type is required</p>
            )}
          </div>
          </div>
          {/* image  */}
          <div className="form-control  my-6">
            <label className="label">
              <span className="label-text">Asset Image*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full  "
            />
            {errors.image?.type === "required" && (
              <p className="text-red-600">Image URL is required</p>
            )}
          </div>
          {/* why you need this  */}
          <div className="form-control  my-6">
            <label className="label">
              <span className="label-text">Why You Need This*</span>
            </label>
            <textarea
              {...register("reason", { required: true })}
              type="text"
              placeholder="Why You Need This"
              className="textarea textarea-bordered textarea-xs w-full"
            />
            {errors.reason?.type === "required" && (
              <p className="text-red-600">Reason is required</p>
            )}
          </div>
          {/* Additional Info  */}
          <div className="form-control  my-6">
            <label className="label">
              <span className="label-text">Additional Information*</span>
            </label>
            <textarea
              {...register("additional", { required: true })}
              type="text"
              placeholder="Additional Info"
              className="textarea textarea-bordered textarea-xs w-full"
            />
            {errors.additional?.type === "required" && (
              <p className="text-red-600">Additional Info is required</p>
            )}
          </div>
          <input className="btn btn-outline w-1/2 mx-auto" type="submit" value="Request" />
        </form>
      </div>
    </div>
  );
};

export default MakeACustomRequest;
