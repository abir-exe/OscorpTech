/* eslint-disable react/jsx-no-comment-textnodes */

const AssetList = () => {
  return (
    <div>
      <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">
        // Asset List
      </h2>
      {/* search sort filter  */}
      <div className="items-center text-center mb-5">
        <div className="join ">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              search by name
            </span>
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
      {/* list  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {/* card */}
      <div className="card mb-6 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        {/* card */}
      <div className="card mb-6 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        {/* card */}
      <div className="card mb-6 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        {/* card */}
      <div className="card mb-6 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        {/* card */}
      <div className="card mb-6 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        {/* card */}
      <div className="card mb-6 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default AssetList;
