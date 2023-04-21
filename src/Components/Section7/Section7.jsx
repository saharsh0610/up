import React from "react";
import "./Section7.css";
import { s7b } from "../../Data";
import ar from "../../assets/arrow-right.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Section7 = () => {
  return (
    <section class="section_7 wrapper">
      <h1>
        Trusted by leading
        <br />
        brands and startups
      </h1>
      <div class="section_7_container">
        <div class="section_7_reviews_list_controls_left"></div>

        <div class="section_7_reviews_carousel">
          <div class="section_7_reviews_list">
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="services__container container mySwiper"
            >
              {s7b.map(({ item }, index) => {
                return <SwiperSlide>{item}</SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
