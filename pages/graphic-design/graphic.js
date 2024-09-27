import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import Slider from "react-slick";
import { projectThreeActive } from "../../src/sliderProps";
import { useState } from "react";
const Graphic = () => {
  const [seeMore, setSeeMore] = useState("");
  const [goldSeemore, setGoldSeemore] = useState("");
  return (
    <>
      <Layout>
        <PageBanner
          titleHtml={` UI/UX Figma Adobe XD <span>SERVICES</span>`}
          titleText="Pricing Plan"
        />
        {/* Responsive Design Area start */}
        <section className="responsive-design-area mb-130 rel z-1">
          <div className="container">
            <div className="row large-gap ">
              <div className="col-lg-6">
                <div className="responsive-design-content rmb-65 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-25">
                    <span className="sub-title style-two mb-15">
                      Responsive Design
                    </span>
                    <h2>Design For Any Device Responsive Web Design</h2>
                  </div>
                  <p>
                    Responsive web design allows your website to adapt to and
                    provide an optimal experience on any device it’s being
                    viewed from. This means that your website will look great
                    and function flawlessly for a user on a desktop computer,
                    laptop, tablet, or smartphone
                  </p>
                  <ul className="list-style-four pt-5 pb-30">
                    <li>Mobile-friendly</li>
                    <li>Design for every device</li>
                    <li>Positive UX &amp; Helps SEO</li>
                  </ul>
                  <Link href="/about">
                    <a className="theme-btn style-two mt-15">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="responsive-design-image wow fadeInRight delay-0-2s">
                  <img
                    src="../assets/images/about/statistics-five.png"
                    alt="Responsive Design"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Responsive Design Area end */}
        <section className="features-area-seven pb-100 rel z-1">
          <div className="container">
            <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
              <div className="col">
                <div className="feature-item-seven mt-30 wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-idea" />
                  </div>
                  <h5>Make Strategy</h5>
                  <p>
                    Define objective brand Plans, keyword research &amp;
                    positioning strategy.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-graphic-design" />
                  </div>
                  <h5>Website Design</h5>
                  <p>
                    We settle on some initial design drafts for website &amp;
                    choose one concept.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="feature-item-seven color-three mt-40 wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-coding-2" />
                  </div>
                  <h5>Development</h5>
                  <p>
                    To make the content, information architecture, visual design
                    all work
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="feature-item-seven color-four wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-checklist" />
                  </div>
                  <h5>Project Testing</h5>
                  <p>
                    Our team of experts are always available for any updates you
                    may need.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-goal" />
                  </div>
                  <h5>Project Lunch</h5>
                  <p>
                    Sit amet conse adipies elitec eiusmod tempors sncidide sesy
                    labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* project area start */}
        <section className="project-area-three py-130 rel z-1" id="project">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg10">
                <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Recent Projects</span>
                  <h2>Look at latest works gallery</h2>
                </div>
              </div>
            </div>
          </div>
          <Slider {...projectThreeActive} className="project-three-active">
            <div className="project-item style-two wow fadeInUp delay-0-2s">
              <div className="project-iamge">
                <img
                  src="../assets/images/projects/project-three1.jpg"
                  alt="Project"
                />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <h4>
                  <Link href="/project-details">Creative Website design</Link>
                </h4>
                <span className="category">Design Responsive</span>
              </div>
            </div>
            <div className="project-item style-two wow fadeInUp delay-0-4s">
              <div className="project-iamge">
                <img
                  src="../assets/images/projects/project-three2.jpg"
                  alt="Project"
                />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <h4>
                  <Link href="/project-details">Software Landing Pages</Link>
                </h4>
                <span className="category">Design Responsive</span>
              </div>
            </div>
            <div className="project-item style-two wow fadeInUp delay-0-6s">
              <div className="project-iamge">
                <img
                  src="../assets/images/projects/project-three3.jpg"
                  alt="Project"
                />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <h4>
                  <Link href="/project-details">Mobile Application Design</Link>
                </h4>
                <span className="category">Design Responsive</span>
              </div>
            </div>
            <div className="project-item style-two wow fadeInUp delay-0-8s">
              <div className="project-iamge">
                <img
                  src="../assets/images/projects/project-three2.jpg"
                  alt="Project"
                />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <h4>
                  <Link href="/project-details">Software Landing Pages</Link>
                </h4>
                <span className="category">Design Responsive</span>
              </div>
            </div>
          </Slider>
        </section>
        {/* Project Area  end */}

        <section className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Our Pricing Package</span>
                  <h3>Graphic Design & Video Animation</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Logo Design</h4>
                  {/* <span className="badge">popular package</span> */}
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Number of concepts included(3)</li>
                      <li>Logo transparency</li>
                      <li>Vector file</li>
                      <li>Source files, jpg, png, psd, ai</li>
                      <li>Social media kit</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">100</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Order Now
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Social Media Post Design</h4>
                  {/* <span className="badge">popular package</span> */}
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li></li>
                      <li>Custom design of 3 post images </li>
                      <li>Layered Source File</li>
                      <li>Source file included</li>
                      <li> 5 Revisions </li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">100</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Order Now
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title"> SVG Lottie Animation </h4>
                  {/* <span className="badge">popular package</span> */}
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li> Custom design </li>
                      <li>Create vector file</li>
                      <li>Include Logo, Icon, Character</li>
                      <li>Include landing/hero animation</li>
                      <li>Number of concepts included</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">100</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Order Now
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title"> Video Editing</h4>
                  {/* <span className="badge">popular package</span> */}
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Color grading</li>
                      <li>Sound design & mixing</li>
                      <li>Motion graphics</li>
                      <li>Subtitles</li>
                      <li>Running time upto 15 minutes</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">100</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Order Now
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-shapes">
            <img
              className="shape dots"
              src="../assets/images/shapes/pricing-bg-dots.png"
              alt="Shape"
            />
            <img
              className="shape wave"
              src="../assets/images/shapes/pricing-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Graphic;
