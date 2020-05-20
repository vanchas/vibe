import React from "react";
import s from "./profile.module.scss";
import Slider from "react-slick";
import m1 from "../../assets/images/main/model-profile/model-1.png";
import m2 from "../../assets/images/main/model-profile/model-2.png";

export default function ProfileCarousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  };

  return (
    <Slider
      {...settings}
      style={{
        maxWidth: "1260px",
        margin: "0 auto"
      }}
    >
      <div>
        <div className={s.slide}>
          <img src={m1} alt="model" className="w-100" />
        </div>
      </div>
      <div>
        <div className={s.slide}>
          <img src={m2} alt="model" className="w-100" />
        </div>
      </div>
    </Slider>
  );
}
