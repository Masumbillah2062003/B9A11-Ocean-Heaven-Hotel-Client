import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const FeaturedRooms = () => {
  const [rooms, setRoom] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRoom(data));
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const someRoom = rooms.slice(0, 6);

  return (
    <div>
      <h1
        className="lg:text-5xl text-3xl lg:mt-12 mt-5 font-bold text-[#FA4612] text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Featured Rooms
      </h1>
      <div className="grid md:grid-cols-2 lg:mt-14 mt-5 lg:grid-cols-3 grid-cols-1 gap-6 h-full">
        {someRoom.map((room) => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            key={room._id}
            className="flex flex-col shadow-2xl p-4 hover:scale-105 duration-500"
          >
            <figure className="flex-grow">
              <img src={room.images} alt="" className="h-[300px] w-full" />
            </figure>
            <div className="space-y-2 py-5">
              <h1 className="text-2xl font-semibold">{room.room_name}</h1>
              <p>{room.room_description}</p>
              <Link
                className="btn bg-[tomato] hover:bg-[tomato]"
                to={`/roomDetails/${room._id}`}
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
