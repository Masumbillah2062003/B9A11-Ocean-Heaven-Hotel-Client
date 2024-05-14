import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import Aos from "aos";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://b9a11-assignment-server-site.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div>
        <h2
          className="lg:text-5xl text-3xl mt-6 lg:mt-16  font-bold text-[#FA4612] text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          User Reviews
        </h2>
        <div
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos="flip-right"
          className="lg:w-[800px] mt-10 border-2 border-gray-600 lg:p-5 p-2 rounded-lg mx-auto"
        >
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="bg-[#fa4412b8] lg:h-[350px] h-[200px] lg:w-[370px] w-full mx-auto text-white flex justify-center items-center p-5">
                  <div>
                    <h1 className="text-xl ">
                      <span className="font-semibold">Name : </span>
                      {review.name}
                    </h1>
                    <h1 className="text-xl ">
                      <span className="font-semibold">Rating : </span>
                      {review.rating}/5
                    </h1>
                    <p>
                      <span className="font-semibold text-xl">Date : </span>{" "}
                      {review.newdate}
                    </p>
                    <p className="">
                      <span className="font-semibold text-xl">Comment : </span>{" "}
                      {review.comment}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
