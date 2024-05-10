import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Room = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const loaderData = useLoaderData();
  const [newData, setNewData] = useState(loaderData);

  const handleFilter = () => {
    setNewData(
      loaderData.filter(
        (p) => p.pricePerNight >= minPrice && p.pricePerNight <= maxPrice
      )
    );
  };

  console.log(newData);

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="p-4 lg:p-0">
      <h1 className="lg:text-5xl text-3xl lg:mt-12  font-bold text-[#FA4612] text-center">
        All Room
      </h1>
      <div className=" mt-10">
        <div className=" flex lg:justify-end justify-center space-x-3">
          <label className=" lg:text-xl lg:font-semibold">
            <span>Min Price : </span>
            <input
              type="number"
              className="w-16 lg:w-32 border-2 rounded-md px-2 outline-[#FA4612] border-black"
              onChange={handleMinPrice}
            />
          </label>

          <label className=" lg:text-xl lg:font-semibold">
            <span>Max Price : </span>
            <input
              type="number"
              className="w-16 lg:w-32 border-2 px-2 rounded-md outline-[#FA4612] border-black"
              onChange={handleMaxPrice}
            />
          </label>
          <button
            onClick={handleFilter}
            className="border-2 bg-[#FA4612] text-white border-[#FA4612] rounded-md px-4 active:scale-95 duration-150"
          >
            Filter
          </button>
        </div>
      </div>
      <h2 className="lg:text-2xl text-lg text-[#FA4612] mt-5 lg:mt-0 mb-6">
        Available Rooms
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {newData.map((room) => (
          <div key={room._id} className="overflow-hidden rounded-md shadow-lg shadow-[#FA4612]">
            <Link to={`/roomDetails/${room._id}`}>
              <img
                src={room.images}
                alt=""
                className="w-full h-full  hover:scale-110 duration-300 rounded-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
