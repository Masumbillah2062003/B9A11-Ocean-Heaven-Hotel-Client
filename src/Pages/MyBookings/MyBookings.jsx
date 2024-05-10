import { useEffect, useState } from "react";

const MyBookings = () => {

  const [roomData, setRoomData] = useState([])

  useEffect(()=> {
    fetch('http://localhost:5000/rooms')
    .then(res => res.json())
    .then(data => {
        const cancelFilter = data.filter(r => r.status)
        setRoomData(cancelFilter)
    })
  },[])

  const cancelBooking = () =>{
    
  }
  return (
    <div>
      {roomData.map((room) => (
        <div key={room._id}>
          <p className="text-xl">
            <span className="font-bold">Room Name : </span>
            {room.room_description}
          </p>
          <button onClick={()=> cancelBooking(room._id)}>Cancel</button>
          {/* <button onClick={() => updateBookingDate(booking.id)}>
            Update Date
          </button>
          <button onClick={() => postReview(booking.id)}>Post Review</button> */}
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
