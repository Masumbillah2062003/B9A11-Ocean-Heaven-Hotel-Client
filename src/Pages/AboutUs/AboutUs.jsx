import { useEffect } from "react";
import me from "../../assets/images/Untitled-e.png"
import "aos/dist/aos.css";
import Aos from "aos";

const AboutUs = () => {
    useEffect(() => {
        Aos.init();
      }, []);
      return (
        <div
          className="container mx-auto lg:mt-20 mt-5 lg:h-[500px] lg:p-0  p-5"
        >
          <h1 className="lg:text-6xl text-4xl font-bold text-center" data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
            About <span className="text-[#FA4612]">Me!</span>
          </h1>
          <div className="mt-8 flex gap-6 items-center justify-center lg:flex-row flex-col ">
            <figure className="lg:w-1/3 flex justify-center items-center">
              <img src={me} alt="" className="w-[250px] h-[250px]" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"/>
            </figure>
            <div className="lg:w-2/3 space-y-5">
              <h2 className="text-3xl font-bold" data-aos="fade-down-left">
                Hi, I am Here To Help Your Next Project!
              </h2>
              <p data-aos="fade-down-right">
                My name is Masum Billah.I am a student. I study at Munshiganj
                Polytechnic Institute in <br /> Department of Computer Science &
                technology at 6th semester.Now, I am learning <br /> Web Design &
                Development and basic Adobe PhotoShop.
              </p>
              <button className="btn text-white text-2xl bg-[#FA4612] hover:bg-transparent hover:border-[#FA4612] hover:text-[#FA4612] px-7 lg:w-[30%] mr-7">
                Read More
              </button>
            </div>
          </div>
        </div>
      );
};

export default AboutUs;