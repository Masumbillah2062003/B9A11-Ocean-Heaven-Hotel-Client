import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Room from "../Pages/Rooms/Room";
import MyBookings from "../Pages/MyBookings/MyBookings";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../Pages/Rooms/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/rooms",
            element: <Room></Room>,
            loader: () => fetch('http://localhost:5000/rooms')
        },
        {
            path: "/roomDetails/:id",
            element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
        }
        ,
        {
            path: "/mybookings",
            element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
        },
        {
            path: "/aboutus",
            element: <AboutUs></AboutUs>
        },
        {
            path: "/contactus",
            element: <ContactUs></ContactUs>
        },
        {
            path: "/signin",
            element: <SignIn></SignIn>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        }
    ]
  },
]);

export default router