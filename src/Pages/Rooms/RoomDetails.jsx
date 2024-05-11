import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import Modal from "react-modal";
import Rating from "./Rating";
import { AuthContext } from "../../Providers/AuthProvider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [rating, setRating] = useState([]);
  const data = useLoaderData();
  const [allData, setAllData] = useState(data);
  const location = useLocation()
  console.log(location)

  const { id } = useParams();
  const [dataLoader, setloaderData] = useState({});

  console.log(id);

  const {
    _id,
    images,
    room_description,
    pricePerNight,
    roomSize,
    specialOffers,
    status,
  } = dataLoader;

  useEffect(() => {
    const found = allData.find((b) => b._id == id);
    setloaderData(found);
  }, [id, allData]);

  const afterOpenModal = () => {
    // subtitle.style.color = "#f00";
  };

  const handleBookNow = () => {
    setIsOpen(true);
  };
  const handleclose = () => {
    setIsOpen(false);
  };

  const handleconfirm = (id) => {
    fetch(`http://localhost:5000/rooms/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Unavailable" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Room book successfully");
          const updated = allData.find((b) => b._id === id);
          updated.status = "Unavailable";
          const newBookings = [updated];
          setAllData(newBookings);
        }
      });

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ room_description, id: _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
    setIsOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setRating(data);
      });
  }, []);

  return (
    <>
      <div className="h-[400px] flex items-center">
        <div className="flex shadow-xl gap-6 p-5 border border-[#FA4612] rounded-md">
          <figure className="w-1/2">
            <img src={images} alt="" className="w-full h-full" />
          </figure>
          <div className="w-1/2 ">
            <div className="space-y-3">
              <hr className="border" />
              <p className="text-xl">
                <span className="font-bold">Description :</span>{" "}
                {room_description}
              </p>
              <p className="text-xl">
                <span className="font-bold">Status :</span> {status}
              </p>
              <p className="text-xl">
                <span className="font-bold">Room Size :</span> {roomSize}
              </p>
              <p className="text-xl">
                <span className="font-bold">Special offer :</span>{" "}
                {specialOffers}
              </p>
              <p className="text-xl">
                <span className="font-bold">Price par night :</span>{" "}
                {pricePerNight} /-
              </p>
              <hr className="border" />
              <div className="w-full flex justify-between">
                <p id="review" className="text-xl">
                  <span className="font-bold">Review :</span>{" "}
                  <Link className="text-[#FA4612] underline">Add Review</Link>
                </p>

                {status === "Unavailable" ? (
                  <span className="font-bold text-primary">Confirmed</span>
                ) : (
                  <Link  
                    to={user || "/signin"}
                    state={location.pathname}
                    onClick={() => handleBookNow(_id)}
                    className="px-5 py-2 text-xl font-semibold active:scale-90 duration-300 text-white bg-[#FA4612] "
                  >
                    Book Now
                  </Link>
                )}

                {user && (
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={handleconfirm}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <p className="text-xl">
                      <span className="font-bold">Description :</span>{" "}
                      {room_description}
                    </p>
                    <p className="text-xl">
                      <span className="font-bold">Price par night :</span>{" "}
                      {pricePerNight} /-
                    </p>
                    <div className="flex justify-between mt-3">
                      <button
                        onClick={() => handleclose()}
                        className="px-3 py-1 text-lg font-semibold active:scale-90 duration-300 text-white bg-[#FA4612]"
                      >
                        close
                      </button>
                      <button
                        onClick={() => handleconfirm(_id)}
                        className="px-3 py-1 text-lg font-semibold active:scale-90 duration-300 text-white bg-[#FA4612]"
                      >
                        Confirm
                      </button>
                    </div>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="lg:text-5xl text-3xl lg:mt-12  font-bold text-[#FA4612] text-center">
          Review
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 mt-10 md:grid-cols-2 grid-cols-1">
          {rating.map((rate) => (
            <Rating key={rate._id} rate={rate}></Rating>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
