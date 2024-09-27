import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import PopupModal from "../popup/Popup";

const Hero1 = () => {
  const props = {
    infinite: false,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  const [openModalFromHeader, setOpenModalModalFromHeader] = useState(false);
  return (
    <section
      id="home"
      className="main-slider-area bgc-black-with-lighting rel z-1"
    >
      <Slider {...props} className="main-slider-active">
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                Revolutionize your business with our bespoke software solutions.
              </span>
              <h1>Intelligence Redefined Here.</h1>
              <div className="slider-btns">
                {/* <Link href="/contact"> */}
                <a
                  className="theme-btn"
                  onClick={() => {
                    setOpenModalModalFromHeader(true);
                  }}
                >
                  Get Started
                  <i className="fas fa-angle-double-right" />
                </a>
                {/* </Link> */}
                <Link href="/services">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide1.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=YwzI0oSyKDo&ab_channel=VerticalSolsPvt.Ltd"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            {/* <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Web Design</b>
                <b>Development</b>
              </span>
            </span> */}
          </div>
        </div>
        {openModalFromHeader && (
          <PopupModal
            show={openModalFromHeader}
            closeCb={() => {
              setOpenModalModalFromHeader(false);
            }}
            openModalFromHeader={openModalFromHeader}
          />
        )}
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                Revolutionize your business with our bespoke software solutions.
              </span>
              <h1>Intelligence Redefined Here.</h1>
              <div
                className="slider-btns"
                
              >
                {/* <Link href="/contact"> */}
                <a className="theme-btn" onClick={() => {
                  setOpenModalModalFromHeader(true);
                }}>
                  Get Started
                  <i className="fas fa-angle-double-right" />
                </a>
                {/* </Link> */}
                <Link href="/services">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide2.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=YwzI0oSyKDo&ab_channel=VerticalSolsPvt.Ltd"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            {/* <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Web Design</b>
                <b>Development</b>
              </span>
            </span> */}
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                Revolutionize your business with our bespoke software solutions.
              </span>
              <h1>Intelligence Redefined Here.</h1>
              <div
                className="slider-btns"
                onClick={() => {
                  setOpenModalModalFromHeader(true);
                }}
              >
                {/* <Link href="/contact"> */}
                <a className="theme-btn" onClick={() => {
                  setOpenModalModalFromHeader(true);
                }}>
                  Get Started
                  <i className="fas fa-angle-double-right" />
                </a>
                {/* </Link> */}
                <Link href="/services">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide1.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=YwzI0oSyKDo&ab_channel=VerticalSolsPvt.Ltd"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </Slider>
      <div className="container">
        <div className="main-slider-dots" />
      </div>
      <div className="slider-shapes">
        <img
          className="shape dots one"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots two"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="assets/images/shapes/slider-wave-line.png"
          alt="Shape"
        />
        <img
          className="shape circle"
          src="assets/images/shapes/slider-circle.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default Hero1;
