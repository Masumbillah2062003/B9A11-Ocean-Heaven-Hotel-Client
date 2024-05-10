import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  // let subtitle;
  const [startDate, setStartDate] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const dataLoader = useLoaderData();

  const {
    availability,
    images,
    room_description,
    pricePerNight,
    roomSize,
    specialOffers,
  } = dataLoader;
  console.log(dataLoader);

  useEffect(()=> {
    fetch('http://localhost:5000/bookings')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  },[])

  const afterOpenModal = () => {
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleBookNow = () => {

    setIsOpen(true);
  };

  const handleconfirm = () => {
    fetch('http://localhost:5000/bookings', {
      method: 'POST', 
      headers: {
          'content-type': 'application/json'
      }, 
      body: JSON.stringify({stata: "confirm", room_description})
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.insertedId){
          alert('service book successfully')
      }
  })
  };

  // const [review, setReview] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/review", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
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
              <span className="font-bold">Availability :</span> {availability}
            </p>
            <p className="text-xl">
              <span className="font-bold">Room Size :</span> {roomSize}
            </p>
            <p className="text-xl">
              <span className="font-bold">Special offer :</span> {specialOffers}
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
              {status === "confirm" ? (
                <span className="font-bold text-primary">Confirmed</span>
              ) : (
                <button
                  onClick={handleBookNow}
                  className="px-5 py-2 text-xl font-semibold active:scale-90 duration-300 text-white bg-[#FA4612] "
                >
                  Book Now
                </button>
              )}
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <form>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </form>
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
                    onClick={closeModal}
                    className="px-3 py-1 text-lg font-semibold active:scale-90 duration-300 text-[#FA4612] border border-[#FA4612] "
                  >
                    close
                  </button>
                  <button
                    onClick={handleconfirm}
                    className="px-3 py-1 text-lg font-semibold active:scale-90 duration-300 text-white bg-[#FA4612] "
                  >
                    confirm
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
