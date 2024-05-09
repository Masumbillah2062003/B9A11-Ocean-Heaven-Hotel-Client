import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Room from "../Pages/Rooms/Room";
import MyBookings from "../Pages/MyBookings/MyBookings";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";

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
            element: <Room></Room>
        },
        {
            path: "/mybookings",
            element: <MyBookings></MyBookings>
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
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignIn></SignIn>
        }
    ]
  },
]);

export default router