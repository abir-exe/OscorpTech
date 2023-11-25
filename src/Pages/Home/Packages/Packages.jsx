const Packages = () => {
  return (
    <div>
        <h2 className="text-5xl text-center mb-10 border-x-2 py-5 font-bold uppercase">// Our Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-base-200 p-5 rounded-t-xl items-center py-16 px-16">
        {/* card 1  */}
        <div className="card   bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/ZXcQJs0/japan.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Package 1:</h2>
    <p className="font-semibold">Maximum Employee: 5</p>
    <p className="font-bold">Price: $5</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Buy Now</button>
    </div>
  </div>
</div>
        {/* card 1  */}
        <div className="card   bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/ZXcQJs0/japan.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title">Package 2:</h2>
    <p className="font-semibold">Maximum Employee: 10</p>
    <p className="font-bold">Price: $8</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Buy Now</button>
    </div>
  </div>
</div>
        {/* card 1  */}
        <div className="card   bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/ZXcQJs0/japan.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title">Package 3:</h2>
    <p className="font-semibold">Maximum Employee: 20</p>
    <p className="font-bold">Price: $15</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Buy Now</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Packages;
