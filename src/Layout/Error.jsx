import { Link, useRouteError } from "react-router-dom";
import err from "../assets/images/error.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="h-screen">
      {error.status === 404 && (
        <div className="flex justify-center items-center flex-col h-screen">
          <img src={err} alt="" className="w-[600px]" />
          <Link
            to="/"
            className="bg-red-500 font-semibold py-3 px-10 text-white text-4xl flex justify-center items-center gap-4 active:scale-95 duration-300"
          >
            <FaLongArrowAltLeft /> <span>Back to home</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Error;
