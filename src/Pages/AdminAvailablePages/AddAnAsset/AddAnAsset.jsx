/* eslint-disable react/jsx-no-comment-textnodes */

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";


const AddAnAsset = () => {

    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

    return (
        <div>
          <Helmet>
        <title>Oscorp Tech | Add An Asset</title>
        
      </Helmet>
            <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">
        // Add An Asset
      </h2>
       {/* form  */}
       <div className="border px-20 py-10 mx-60 my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name  */}
          <div className="form-control  my-6">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              {...register("productName", { required: true })}
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full  "
            />
            {errors.productName?.type === "required" && (
              <p className="text-red-600">Product Name is required</p>
            )}
          </div>
          <div className="flex justify-between gap-6">
            {/* Product type  */}
            <div className="form-control w-1/2 my-6">
            <label className="label">
              <span className="label-text">Product Type*</span>
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
            {/* quantity  */}
            <div className="form-control flex-1 my-6">
            <label className="label">
              <span className="label-text">Product Quantity*</span>
            </label>
            <input
              {...register("quantity", { required: true })}
              type="number"
              placeholder="Product Quantity"
              className="input input-bordered w-full  "
            />
            {errors.quantity?.type === "required" && (
              <p className="text-red-600">Product Quantity is required</p>
            )}
          </div>
          </div>
          <input className="btn btn-outline w-1/2 mx-auto" type="submit" value="Add Asset" />
        </form>
      </div>
        </div>
    );
};

export default AddAnAsset;