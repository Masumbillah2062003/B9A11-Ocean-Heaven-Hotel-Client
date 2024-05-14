import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import Aos from "aos";

// import { useLoaderData } from "react-router-dom";

const MyBookings = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [reviewModal, setReviewModal] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [roomData, setRoomData] = useState([]);
  const { user } = useContext(AuthContext);
  const [id, setId] = useState();
  const [data, setData] = useState({});
  console.log(data);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    if (user?.email) {
      // fetch(`http://localhost:5000/bookings/${user.email}`)
      // fetch(`http://localhost:5000/bookings?email=${user.email}`, {
      fetch(url, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setRoomData(data);
        });
    }
  }, [url, user?.email]);

  console.log(roomData);

  const cancelBooking = (id, ids, date) => {
    console.log(new Date(date).getTime());
    if (new Date(date).getTime() > new Date().getTime() + 86400000) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = roomData.filter((booking) => booking._id !== id);
            setRoomData(remaining);
          }
        });

      fetch(`http://localhost:5000/rooms/${ids}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Available" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Your booking will not be cencel",
        icon: "error",
      });
    }
  };
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ startDate: startDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = roomData.filter((b) => b._id !== id);
          const updated = roomData.find((b) => b._id === id);
          updated.startDate = startDate;
          const newBookings = [updated, ...remaining];
          setRoomData(newBookings);
          Swal.fire({
            title: "Update Date!",
            text: "Your date has been Updated.",
            icon: "success",
          });
        }
      });
    setShowModal(false);
  };
  const updateBookingDate = (id, roomName) => {
    const data = { id, roomName };
    setData(data);
    setShowModal(true);
  };
  const handleclose = () => {
    setShowModal(false);
  };

  console.log(id);
  const handleRatingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const date = form.date.value;
    const newdate = new Date(date).toLocaleString();
    const review = { name, rating, newdate, comment, id };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setReviewModal(false);

    Swal.fire({
      title: "Your Review Post",
      text: "Your file has been deleted.",
      icon: "success",
    });
  };

  const handleReview = (id) => {
    setReviewModal(true);
    setId(id);
  };
  const handleReviewClose = () => {
    setReviewModal(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="p-3">
      <h1
        data-aos="flip-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="lg:text-5xl text-3xl lg:mt-12  font-bold text-[#FA4612] text-center"
      >
        My Booking Room
      </h1>
      <div
        className="overflow-x-auto mt-10"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {roomData.map((room) => (
              <tr key={room._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={room.images} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        <p className="lg:text-xl text-xs">{room.room_name}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="lg:text-xl text-xs">
                    {new Date(room.startDate).toLocaleDateString()}
                  </p>
                </td>
                <td>
                  <button
                    className="btn bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500"
                    onClick={() => updateBookingDate(room._id, room.room_name)}
                  >
                    Update Date
                  </button>
                </td>
                <th>
                  <button
                    className="btn bg-green-900 hover:bg-transparent border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500"
                    onClick={() => handleReview(room.id)}
                  >
                    Review
                  </button>
                </th>
                <th>
                  <button
                    className="btn bg-black hover:bg-transparent border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500"
                    onClick={() =>
                      cancelBooking(room._id, room.id, room.startDate)
                    }
                  >
                    Cancel
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{data.roomName}</h3>
                </div>
                {/*body*/}
                <div className="p-3">
                  <p className="text-xl font-semibold">Update Date </p>
                  <div className="w-full py-2">
                    <DatePicker
                      className="outline-none border-2 border-red-500  py-2 px-3 rounded-md"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
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
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleUpdate(data.id)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {reviewModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none h-auto focus:outline-none p-5">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between lg:p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h1 className="lg:text-4xl text-2xl w-full  font-bold text-[#FA4612] text-center">
                    Review System
                  </h1>
                </div>
                {/*body*/}
                <div className="lg:p-5 px-3">
                  <div className="lg:w-[500px] w-[260px] mx-auto text-xl border-2 border-[#FA4612] rounded-lg  flex justify-center items-center lg:p-5 px-5">
                    <form onSubmit={handleRatingSubmit}>
                      <label>
                        <span className="text-[#FA4612]">Name </span>
                        <input
                          type="text"
                          value={user.displayName}
                          required
                          name="name"
                          className="border-[#FA4612] input input-bordered w-full"
                        />
                      </label>
                      <label>
                        <span className="text-[#FA4612]"> Rating </span>
                        <input
                          min="1"
                          max="5"
                          type="number"
                          name="rating"
                          placeholder="Rating (1-5)"
                          required
                          className="border-[#FA4612] input input-bordered w-full"
                        />
                      </label>
                      <label>
                        <span className="text-[#FA4612]"> Date and Time </span>
                        <input
                          type="datetime-local"
                          name="date"
                          placeholder="Rating (1-5)"
                          required
                          className="border-[#FA4612] input input-bordered w-full"
                        />
                      </label>
                      <label>
                        <span className="text-[#FA4612]"> Comment </span>
                        <textarea
                          name="comment"
                          required
                          className="border-[#FA4612] textarea textarea-bordered w-full"
                          placeholder="your message"
                        ></textarea>
                      </label>
                      <input
                        type="submit"
                        value="Review submit"
                        className="w-full btn text-xl bg-[#FA4612] text-white hover:bg-[#FA4612]"
                      />
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase lg:px-5 lg:py-3 px-3 py-1 border-red-500 border-2 lg:text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute lg:-top-5 -top-4 -right-4 lg:-right-8 bg-white rounded-full"
                    type="button"
                    onClick={handleReviewClose}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default MyBookings;
