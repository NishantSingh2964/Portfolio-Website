import React from "react";
import "./Certificates.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import certificate1 from "../../assets/certificate1.jpg"
import certificate2 from "../../assets/certificate2.jpg";
import certificate3 from "../../assets/certificate3.png";
import certificate4 from "../../assets/certificate4.png";
import certificate5 from "../../assets/certificate5.png";

const certificates = [
  { id: 1, src: certificate1 },
  { id: 2, src: certificate2 },
  { id: 3, src: certificate3 },
  { id: 4, src: certificate4 },
  { id: 5, src: certificate5 },
];

const SamplePrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow-btn left-6">
    <AiOutlineArrowLeft size={26} />
  </div>
);

const SampleNextArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow-btn right-6">
    <AiOutlineArrowRight size={26} />
  </div>
);

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 3000,   
    pauseOnHover: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <section>
      <div className="wrapper py-36">
        <div className="text-center">
          <span className="sub-text overlay-text middle-ele" datatype="Certifications">
            Certifications
          </span>
          <h2 className="skills-title">
            My <span className="green-text">Certifications</span>
          </h2>
        </div>

        <div className="mt-12 relative">
          <Slider {...settings}>
            {certificates.map((item) => (
              <div key={item.id} className="flex justify-center">
                <img
                  src={item.src}
                  alt={`certificate-${item.id}`}
                  className="rounded-xl max-h-[400px] w-auto object-contain" // ✅ reduced size
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
