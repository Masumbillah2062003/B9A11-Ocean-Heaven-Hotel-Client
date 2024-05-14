import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.jpg";
import room3 from "../../assets/images/room3.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure>
            <img src={room1} alt="" className="w-full h-full"/>
          </figure>
        </SwiperSlide>
        <SwiperSlide >
          <figure >
            <img src={room2} alt="" className="w-full h-full"/>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={room3} alt="" className="w-full h-full"/>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
