import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import Rating from "./Rating";
import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = React.useState(false);
  const [rating, setRating] = useState([]);
  const data = useLoaderData();
  const [allData, setAllData] = useState(data);
  const location = useLocation();
  console.log(location);

  const { id } = useParams();
  const [dataLoader, setloaderData] = useState({});


  const {
    _id,
    images,
    room_description,
    room_name,
    pricePerNight,
    roomSize,
    specialOffers,
    status,
  } = dataLoader;

  useEffect(() => {
    const found = allData.find((b) => b._id == id);
    setloaderData(found);
  }, [id, allData]);

  const handleBookNow = () => {
    setShowModal(true);
  };
  const handleclose = () => {
    setShowModal(false);
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
      <div className="lg:mt-20 mt-10 p-3">
        <div className="lg:h-[400px] flex items-center">
          <div className="lg:flex shadow-xl gap-6 p-5 border border-[#FA4612] rounded-md">
            <figure className="lg:w-1/2">
              <img src={images} alt="" className="w-full h-full" />
            </figure>
            <div className="lg:w-1/2 ">
              <div className="space-y-3">
                <hr className="border" />
                <p className="text-xl">
                  <span className="font-bold">Name :</span> {room_name}
                </p>
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
                <div className="w-full flex justify-end">
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
                    <>
                      {showModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-sm">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    {room_name}
                                  </h3>
                                </div>
                                {/*body*/}
                                <div className="p-3">
                                  <p className="text-xl font-semibold">
                                    Selection Date{" "}
                                  </p>
                                  <div className="w-full py-2">
                                    <DatePicker
                                      className="outline-none border-2 border-red-500  py-2 px-3 rounded-md"
                                      selected={startDate}
                                      onChange={(date) => setStartDate(date)}
                                    />
                                  </div>
                                </div>
                                <div className="relative px-6 flex-auto">
                                  <p className="text-2xl font-semibold">Price : {pricePerNight}/- par night</p>
                                  <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                                    {room_description}
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleclose}
                                  >
                                    Close
                                  </button>
                                  <Link
                                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => handleconfirm(_id)}
                                  >
                                    Confirm
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="lg:text-5xl text-3xl lg:mt-20  font-bold text-[#FA4612] text-center">
            Review
          </h1>
          <div className="grid lg:grid-cols-3 gap-5 mt-10 md:grid-cols-2 grid-cols-1">
            {rating.map(
              (rate) =>
                rate.id == _id && <Rating key={rate._id} rate={rate}></Rating>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
