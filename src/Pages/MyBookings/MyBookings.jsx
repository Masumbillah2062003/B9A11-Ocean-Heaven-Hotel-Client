import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const MyBookings = () => {
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  const bookingData = useLoaderData();
  const [roomData, setRoomData] = useState(bookingData);
  const { user } = useContext(AuthContext);
  console.log(user);

  // const afterOpenModal = () => {
  //   // subtitle.style.color = "#f00";
  // };

  const cancelBooking = (id, ids) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successful");
          const remaining = roomData.filter((booking) => booking._id !== id);
          setRoomData(remaining);
        }
      });

    fetch(`http://localhost:5000/rooms/${ids}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "available" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // const handleClose = () => {

  //   fetch(`http://localhost:5000/bookings/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ startDate: startDate }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         // update state
  //         const remaining = roomData.filter((b) => b._id !== id);
  //         const updated = roomData.find((b) => b._id === id);
  //         updated.startDate = startDate;
  //         const newBookings = [updated, ...remaining];
  //         setRoomData(newBookings);
  //       }
  //     });
  //   setIsOpen(false);
  // };
  // const updateBookingDate = (id) => {
  //   setIsOpen(true);
  //   setId(id);
  // };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const date = form.date.value;
    const review = { name, rating, date,comment };

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
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {roomData.map((room) => (
          <div key={room._id} className="border-[#FA4612] border-2 p-5">
            <div className="flex justify-between items-center">
              <div className="space-y-3">
                <p className="text-xl">
                  <span className="font-bold">Date : </span>
                  {room.startDate}
                </p>
                <p className="text-xl">
                  <span className="font-bold">Room Name : </span>
                  {room.room_description}
                </p>
              </div>
              <div>
                {/* <button
                className="btn bg-[#FA4612] text-white"
                onClick={() => updateBookingDate(room._id)}
              >
                Update Date
              </button> */}
                <br />
                <button
                  className="btn w-full bg-[#FA4612] text-white"
                  onClick={() => cancelBooking(room._id, room.id)}
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={updateBookingDate}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <form onSubmit={handleClose}>
              <input
                type="date"
                defaultValue={room.startDate}
                name="date"
                id=""
              />
              <input
                type="submit"
                value="Update"
                className="px-3 py-1 text-lg font-semibold active:scale-90 duration-300 text-white bg-[#FA4612] "
              />
            </form>
          </Modal> */}
            {/* <button onClick={() => postReview(booking.id)}>Post Review</button> */}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h1 className="lg:text-5xl text-3xl lg:mt-12  font-bold text-[#FA4612] text-center">
          Review System
        </h1>
        <div className="w-[500px] mx-auto text-xl border-2 border-[#FA4612] rounded-lg  flex justify-center items-center p-5 mt-10">
          <form onSubmit={handleRatingSubmit} >
            <label>
              <span className="text-[#FA4612]">Name </span>
              <input
                type="text"
                value={user.displayName}
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
                className="border-[#FA4612] input input-bordered w-full"
              />
            </label>
            <label>
             <span className="text-[#FA4612]"> Date and Time </span>
              <input
                type="datetime-local"
                name="date"
                placeholder="Rating (1-5)"
                className="border-[#FA4612] input input-bordered w-full"
              />
            </label>
            <label>
             <span className="text-[#FA4612]"> Comment </span>
              <textarea
                name="comment"
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
    </>
  );
};

export default MyBookings;
