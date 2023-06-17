import Slider from "react-slick";
export function Staticcarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    //  rtl:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="item">
          <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/8.jpg")} />
        </div>
        <div className="item">
          <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/9.jpg")} />
        </div>
        <div className="item">
          <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/10.jpg")} />
        </div>
      </Slider>
    </div>
  );
}

export function CustomStaticCarousel({ img = [] }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    //  rtl:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {img.length ? img.map((item) => (
          <div className="item" key={item}>
            <img alt="img" className="d-block w-100 dala-carousel-img-size" src={item} />
          </div>
        )) : (
          <>
            <div className="item">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/8.jpg")} />
            </div>
            <div className="item">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/9.jpg")} />
            </div>
            <div className="item">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/10.jpg")} />
            </div>
          </>)}
      </Slider>
    </div>
  );
}