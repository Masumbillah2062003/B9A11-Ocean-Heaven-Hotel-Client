import Aos from "aos";
import { useEffect } from "react";

const NewLetter = () => {
 
  return (
    <div data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="zoom-in" className="bg-[#fa441218] p-7 lg:mt-20 mt-8">
      <h1 className="lg:text-4xl text-2xl  font-bold text-[#FA4612] text-center">
        Subscribe to our newsLetter..!
      </h1>
      <p className="text-center mt-3">Sign Up for regular update form our offices (and for free goodies too.)</p>
        <form className="lg:w-[550px] mx-auto p-5 rounded-lg bg-gray-200 mt-5">
            <label className="block">
               <div className="mb-3"> <span className="text-xl font-bold">Email</span>(required)</div>
                <input type="email" placeholder="Enter your email here" className="w-full outline-none border-2 border-[#FA4612] px-5 h-12 rounded-md" required/>
            </label>
            <input type="submit" value="Submit"  className="w-full bg-[#FA4612] btn hover:bg-[#FA4612] text-white mt-5 text-xl font-semibold outline-none" />
        </form>
    </div>
  );
};

export default NewLetter;
