import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1000
  };

  return (
 <Slider {...settings}>
      <div className="bg-[url('https://picsum.photos/200/300')] h-96">
        <h3>1</h3>
      </div>
      <div className="bg-[url('https://picsum.photos/200/300')] h-96 ">
        <h3>2</h3>
      </div>
      <div className="bg-[url('https://picsum.photos/200/300')] h-96">
        <h3>3</h3>
      </div>
      <div className="bg-[url('https://picsum.photos/200/300')] h-96">
        <h3>4</h3>
      </div>
      <div className="bg-[url('https://picsum.photos/200/300')] h-96">
        <h3>5</h3>
      </div>
      <div className="bg-[url('https://picsum.photos/200/300')] h-96">
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default Carousel