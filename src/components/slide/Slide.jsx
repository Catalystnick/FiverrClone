import "./slide.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Slide({ children, slidesToShow }) {
  return (
    <div className="slider">
      <button className="arrow-left">
        <FaArrowLeft />
      </button>
      <div className="slideContainer">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesToShow}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          pagination={{ clickable: true }}
          direction="horizontal"
          loop={true}
        >
          {children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="arrow-right">
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Slide;
