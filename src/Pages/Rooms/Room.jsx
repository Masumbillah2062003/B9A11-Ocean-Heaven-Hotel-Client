import Aos from "aos";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    Aos.init();
  }, []);


  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="p-4 lg:p-0">
      <h1
        data-aos="flip-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="lg:text-5xl text-3xl lg:mt-12  font-bold text-[#FA4612] text-center"
      >
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
          <div
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            key={room._id}
            className="overflow-hidden rounded-md "
          >
            <Link to={`/roomDetails/${room._id}`} className="relative w-full h-full ">
              <figure>
                <img
                  src={room.images}
                  alt=""
                  className="w-full h-[250px]  hover:scale-110 duration-300 rounded-md "
                />
                <h2 className="absolute text-3xl top-0 bg-[#FA4612] px-3 py-2 font-semibold text-white">
                  {room.status}
                </h2>
              </figure>
              <div className="bg-[#FA4612] p-5 text-white">
                <h1 className="text-xl font-bold">{room.room_name}</h1>
                <h2 className="text-lg font-semibold">Price : {room.pricePerNight}/par night</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
