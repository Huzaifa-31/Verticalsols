import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Counter from "../src/components/Counter";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
import Hero1 from "../src/components/home1/Hero1";
import RecentProjects from "../src/components/home1/RecentProjects";
import Layout from "../src/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { servicesState } from "../src/redux/actions/authActions";
import { useRouter } from "next/router";
import Lottie from "react-lottie-player";
import mobileAnimation from "../src/lottie-json/mobile-app.json";
import digitalagency from "../src/lottie-json/digital-agency.json";

const Index = () => {
  const _dispatch = useDispatch();
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          // href="assets/images/"
          type="image/x-icon"
        />
      </Head>
      <Layout header={1} className="home-one" footer={1}>
        {/*End Hidden Sidebar */}
        {/* Slider Section Start */}
        <Hero1 />
        {/* Slider Section End */}
        {/* Working Process Area start */}
        <section className="work-process-area pb-95 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Working Process</span>
                  <h2>How does we works</h2>
                </div>
              </div>
            </div>
            <div className="work-process-wrap rel z-1">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <span className="number">01</span>
                      <i className="flaticon-optimization" />
                    </div>
                    <h4>Info Gathering</h4>
                    <p>
                      Thorough information gathering with a proven track record
                      of delivering accurate insights and intelligence.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <span className="number">02</span>
                      <i className="flaticon-link" />
                    </div>
                    <h4>Idea Planning</h4>
                    <p>
                      Experienced in innovative and strategic ideation, adept at
                      translating concepts into actionable plans that drive
                      business growth and success.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                    <div className="icon">
                      <span className="number">03</span>
                      <i className="flaticon-data" />
                    </div>
                    <h4>Design Analysis</h4>
                    <p>
                      Proficient in comprehensive design analysis, skilled at
                      identifying opportunities for improvement and creating
                      solutions that enhance usability.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                    <div className="icon">
                      <span className="number">04</span>
                      <i className="flaticon-star" />
                    </div>
                    <h4>Testing &amp; Lunch</h4>
                    <p>
                      Experienced in meticulous testing and seamless launch
                      execution, dedicated to ensuring that products and
                      services meet high-quality standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="work-process-shape">
                <img
                  src="assets/images/shapes/worp-process-step.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Working Process Area end */}
        {/* Design Featured Start */}
        <section className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1">
          <div className="container">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">Core Design Featured</span>
              <h2>What we provider for website</h2>
            </div>
            <div className="row no-gap align-items-center">
              <div className="col-lg-3">
                <div className="feature-left">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInRight delay-0-2s">
                        <div className="icon">
                          <i className="flaticon-design" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a> Custom Websites </a>
                            </Link>
                          </h4>
                          {/* <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link> */}
                        </div>
                        <div>
                          <Link href="/service-details">
                            <a> Mern/Mean </a>
                          </Link>
                        </div>
                        <div>
                          <Link href="/service-details">
                            <a> Laravel/Php </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInRight delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-web-page" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a> CMS Development </a>
                            </Link>
                          </h4>
                          <div>
                            <Link href="/service-details">
                              <a> WordPress</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Shopify</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Wix</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Webflow</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-middle rmt-30">
                  <div className="image wow fadeInUp delay-0-2s">
                    <img
                      className="circle-text"
                      src="assets/images/shapes/feature-image-top.png"
                      alt="Text"
                    />
                    <img
                      className="round"
                      src="assets/images/features/feature-middle.png"
                      alt="Feature Middle"
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="service-item style-three wow fadeInUp delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-online" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>App Development</a>
                            </Link>
                          </h4>
                          <div>
                            <Link href="/service-details">
                              <a>Android App</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Ios App</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
                        <div className="icon">
                          <i className="flaticon-web-programming" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>IT Consultancy</a>
                            </Link>
                          </h4>
                          <div>
                            <Link href="/service-details">
                              <a>Strategy Consult</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>ERP Consult</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>IT Security</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="feature-right">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three mt-100 wow fadeInLeft delay-0-2s">
                        <div className="icon">
                          <i className="flaticon-graphic-design" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Digital Marketing</a>
                            </Link>
                          </h4>
                          <div>
                            <Link href="/service-details">
                              <a>Seo</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Social Media</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Email Marketing</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Google Adward</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInLeft delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-user-experience" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Graphic Design</a>
                            </Link>
                          </h4>
                          <div>
                            <Link href="/service-details">
                              <a>Logo & Branding</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Web & App</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Marketing Design</a>
                            </Link>
                          </div>
                          <div>
                            <Link href="/service-details">
                              <a>Art & Motion Design</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="design-feature-shapes">
            <img
              className="shape dots"
              src="assets/images/shapes/slider-dots.png"
              alt="Shape"
            />
            <img
              className="shape wave-line"
              src="assets/images/shapes/feature-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Design Featured End */}
        {/* Core Feature start */}
        <section className="feature-area-five bgc-lighter pt-100 pb-70">
          <div className="container">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">Our Services</span>
              <h2> Digital Dream Makers Cost-Effective Solutions </h2>
            </div>
            <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center onhovarsvg">
              <div
                className="col wow fadeInUp delay-0-2s"
                onClick={() => {
                  router.push("website-development/mern");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-responsive" />
                  {/*                    <div className="flaticon-responsive">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      className="svg-class"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M245.221,348.125c-56.477,0-102.424-46.162-102.424-102.903s45.947-102.904,102.424-102.904 c56.476,0,102.424,46.163,102.424,102.904S301.698,348.125,245.221,348.125z M245.221,162.318 c-45.449,0-82.424,37.19-82.424,82.904c0,45.713,36.975,82.903,82.424,82.903c45.449,0,82.424-37.19,82.424-82.903 C327.645,199.508,290.67,162.318,245.221,162.318z" />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path d="M257.532,490h-0.001h-25.06c-24.58,0-44.579-20.078-44.58-44.758v-39.457c-5.296-1.908-10.519-4.091-15.625-6.532 l-27.732,27.875c-8.42,8.466-19.62,13.128-31.536,13.128c-11.915,0.001-23.117-4.66-31.539-13.125l-17.721-17.814 c-17.349-17.436-17.35-45.814-0.002-63.259l27.782-27.924c-2.442-5.154-4.627-10.43-6.534-15.782l-39.196-0.002 c-11.919,0-23.117-4.661-31.537-13.125c-8.407-8.448-13.038-19.682-13.038-31.628v-25.192c0-24.675,19.996-44.753,44.574-44.758 h39.199c1.908-5.354,4.092-10.629,6.532-15.781l-27.779-27.923c-8.407-8.449-13.039-19.683-13.039-31.629 c0-11.944,4.63-23.178,13.037-31.629l17.722-17.813c8.411-8.455,19.612-13.111,31.54-13.111c11.926,0,23.126,4.655,31.538,13.109 l27.733,27.876c5.104-2.439,10.327-4.623,15.624-6.53V44.757C187.892,20.078,207.889,0,232.469,0h25.06 c24.581,0,44.579,20.078,44.579,44.757v39.459c5.297,1.908,10.52,4.092,15.624,6.532l27.733-27.876 c8.414-8.466,19.615-13.13,31.535-13.13c11.918,0,23.12,4.663,31.542,13.131l17.718,17.806 c17.349,17.438,17.35,45.817,0.004,63.262l-27.785,27.929c2.429,5.135,4.607,10.407,6.518,15.778l39.216,0.003 c11.924,0,23.119,4.661,31.536,13.125c8.407,8.449,13.037,19.683,13.037,31.629l0.002,25.188c0,24.675-19.996,44.754-44.575,44.76 h-39.215c-1.911,5.37-4.089,10.643-6.518,15.779l27.783,27.928c8.407,8.448,13.038,19.681,13.038,31.626 c0,11.944-4.629,23.177-13.035,31.629l-17.723,17.814c-8.409,8.454-19.61,13.11-31.541,13.11 c-11.927,0-23.127-4.655-31.539-13.108l-27.733-27.877c-5.105,2.441-10.327,4.624-15.622,6.53l-0.003,39.462 c0.004,11.939-4.625,23.172-13.035,31.626C280.648,485.337,269.449,489.999,257.532,490z M170.307,377.165 c1.595,0,3.201,0.383,4.678,1.17c8.275,4.411,16.958,8.042,25.81,10.792c4.162,1.293,6.998,5.144,6.998,9.502v46.613 c0.001,13.706,11.071,24.856,24.679,24.856h25.059c6.582,0,12.772-2.579,17.431-7.263c4.672-4.697,7.245-10.943,7.243-17.588 l0.003-46.621c0.001-4.358,2.836-8.209,6.999-9.502c8.849-2.749,17.531-6.379,25.803-10.789c3.873-2.063,8.64-1.349,11.736,1.763 l32.826,32.995c4.647,4.671,10.838,7.244,17.43,7.244c6.594,0,12.785-2.573,17.432-7.244l17.722-17.814 c4.671-4.697,7.244-10.946,7.244-17.595c0-6.648-2.573-12.895-7.245-17.59l-32.825-32.996c-3.07-3.086-3.778-7.81-1.747-11.66 c4.353-8.251,7.961-16.986,10.726-25.966c1.285-4.174,5.143-7.021,9.51-7.021h46.393c13.606-0.003,24.677-11.155,24.677-24.859 l-0.002-25.186c0-6.65-2.573-12.899-7.246-17.596c-4.655-4.681-10.838-7.258-17.412-7.258l-46.411-0.004 c-4.367-0.001-8.223-2.849-9.509-7.021c-2.765-8.979-6.374-17.715-10.726-25.964c-2.032-3.851-1.324-8.575,1.747-11.661 l32.825-32.995c9.649-9.703,9.649-25.491-0.001-35.191l-17.719-17.806c-4.661-4.687-10.852-7.266-17.433-7.266 c-6.582,0-12.77,2.579-17.423,7.261l-32.831,32.999c-3.096,3.111-7.865,3.826-11.737,1.762 c-8.267-4.408-16.95-8.039-25.806-10.792c-4.162-1.293-6.998-5.144-6.998-9.502V44.757c0-13.705-11.07-24.855-24.678-24.855 h-25.06c-13.606,0-24.676,11.15-24.676,24.855v46.614c0,4.358-2.836,8.209-6.998,9.503c-8.856,2.751-17.539,6.382-25.808,10.79 c-3.873,2.063-8.64,1.349-11.735-1.763l-32.825-32.995c-4.647-4.671-10.837-7.244-17.429-7.244 c-6.592,0-12.783,2.573-17.432,7.246L77.845,94.72c-4.672,4.696-7.245,10.944-7.245,17.594c0.001,6.648,2.574,12.896,7.246,17.592 L110.67,162.9c3.071,3.087,3.778,7.811,1.746,11.662c-4.384,8.306-7.998,17.04-10.743,25.961c-1.284,4.175-5.142,7.024-9.51,7.024 H45.788c-13.605,0.003-24.675,11.153-24.675,24.856v25.192c0,6.649,2.573,12.896,7.245,17.592 c4.659,4.682,10.846,7.261,17.422,7.261l46.383,0.002c4.368,0,8.226,2.85,9.51,7.024c2.742,8.912,6.356,17.647,10.744,25.962 c2.032,3.851,1.324,8.575-1.747,11.662l-32.824,32.993c-9.649,9.702-9.65,25.489,0.001,35.188l17.72,17.814 c4.659,4.683,10.85,7.261,17.431,7.261c6.581,0,12.77-2.579,17.427-7.262l32.826-32.995 C165.165,378.173,167.72,377.165,170.307,377.165z" />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>  */}

                  <h5>
                    <a>MERN / MEAN Development</a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-3s"
                onClick={() => {
                  router.push("/website-development/laravel");
                }}
              >
                <div className="feature-item-five ">
                  <i className="flaticon-feature" />
                  <h5>
                    <a>Laravel / PHP Development</a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-4s"
                onClick={() => {
                  // _dispatch(servicesState("Wordpress"));
                  router.push("/website-development/wordpress");
                }}
              >
                <div className="feature-item-five">
                  <i>
                    <img
                      className="serviceimg"
                      src="assets/images/serviceicon/mern.svg"
                      alt=""
                    />
                  </i>
                  <h5>
                    <a> WordPress Development </a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/website-development/shopify");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-seo" />
                  <h5>
                    <a> Shopify Development </a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/mobile-app-development/react-native");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-search-location" />
                  <h5>
                    <a> React Native Development </a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/mobile-app-development/flutter");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-settings" />
                  <h5>
                    <a> Flutter Development </a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/graphic-design/ui-ux");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-settings" />
                  <h5>
                    <a> UI/UX Figma Adobe XD </a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/graphic-design/graphic");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-settings" />
                  <h5>
                    <a> Graphic Design & Video Animation </a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/digital-marketing/social-media");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-settings" />
                  <h5>
                    <a> Social Media Marketing </a>
                  </h5>
                </div>
              </div>
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/digital-marketing/seo");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-settings" />
                  <h5>
                    <a> Search Engine Optimization </a>
                  </h5>
                </div>
              </div>{" "}
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/digital-marketing/google-ads");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-settings" />
                  <h5>
                    <a> Google Ads Compaign </a>
                  </h5>
                </div>
              </div>{" "}
              <div
                className="col wow fadeInUp delay-0-5s"
                onClick={() => {
                  router.push("/digital-marketing/email-marketing");
                }}
              >
                <div className="feature-item-five">
                  <i className="flaticon-settings" />
                  <h5>
                    <a>
                      Email <br /> Marketing
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Core Feature end */}
        {/* About Us Area start */}
        <section className="about-area-one pt-130 pb-125 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one ">
                  {/* <img style={{objectFit:"cover"}} src="assets/images/gif/digital.gif" alt="About us" /> */}
                  <Lottie
                    loop
                    animationData={digitalagency}
                    play
                    style={{ width: 700 }}
                  />

                  <img
                    className="image-left"
                    src="assets/images/shapes/image-left.png"
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                  <div className="section-title mb-45">
                    <span className="sub-title mb-15">
                      About digital solutions
                    </span>
                    <h2>Best Digital solutions agency to growth</h2>
                  </div>
                  <ul className="list-style-one">
                    <li>
                      <div className="content">
                        <h4>Company Mission</h4>
                        <p>
                          As an IT service provider company, our mission is to
                          deliver innovative and effective technology solutions
                          that help businesses and organizations achieve their
                          goals.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h4>Company Vision</h4>
                        <p>
                          Our vision is to create innovative solutions that
                          transform the way businesses operate. We strive to be
                          at the forefront of technology and provide our clients
                          with unparalleled service and support. Our goal is to
                          empower businesses to achieve their full potential and
                          drive growth in the digital age.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h4>Our Philosophy</h4>
                        <p>
                          At Verticalsols, we believe that technology should be
                          accessible, intuitive, and reliable. We approach our
                          work with a customer-centric mindset, prioritizing the
                          needs and goals of our clients above all else.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Us Area end */}
        {/* Statistics Three Area start */}

        <section className="statistics-area-three bgs-cover pb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7">
                <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-2s">
                  <div className="row justify-content-center justify-content-xl-start">
                    <div className="col-xl-9">
                      <div className="section-title mb-60">
                        <span className="sub-title mb-15">
                          Company Statistics
                        </span>
                        <h2>We’ve some achievement from global partners</h2>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-3s">
                        <i className="flaticon-startup" />
                        <Counter end={950} />
                        <span className="counter-title">Projects complete</span>
                        <p></p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-5s">
                        <i className="flaticon-global" />
                        <Counter end={15} />
                        <span className="counter-title">
                          Years Of Experience
                        </span>
                        <p> </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s">
                        <i className="flaticon-rating" />
                        <Counter end={700} />
                        <span className="counter-title">Happy Customer</span>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="statistics-three-image bg-squire-shape mb-30 wow fadeInLeft delay-0-3s">
                  <img
                    src="assets/images/about/statictics.jpg"
                    alt="Statictics"
                  />
                  <img
                    className="image-right"
                    src="assets/images/shapes/image-right.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Core Technologies */}
        {/* Statistics Three Area end */}

        {/* Project page import */}

        {/* <ProjectGridIsotophome /> */}

        {/* Project Area start */}
        <RecentProjects />
        {/* Project Area end */}
        {/* CTA Area start */}
        <section className="call-to-action-area rel z-2">
          <div className="container">
            <div
              className="cta-inner bgs-cover"
              style={{
                backgroundImage: "url(assets/images/background/cta-bg.jpg)",
              }}
            >
              <div className="row">
                <div className="col-xl-6">
                  <div className="cta-item wow fadeInLeft delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-target" />
                    </div>
                    <h4>Have any Project On Minds ?</h4>
                    <Link href="/contact">
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="cta-item wow fadeInRight delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-target" />
                    </div>
                    <h4>We are to work SEO optimization ?</h4>
                    <Link href="/contact">
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Area end */}
        {/* Pricing Two Area start */}
        <section className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Our Pricing Package</span>
                  <h3>Website Design Packages</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Basic Plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">248</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
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
                  <h4 className="title">Standard plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">352</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
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
                  <h4 className="title">golder Plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">583</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
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
                  <h4 className="title">platinum Plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">834</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
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
              src="assets/images/shapes/pricing-bg-dots.png"
              alt="Shape"
            />
            <img
              className="shape wave"
              src="assets/images/shapes/pricing-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Pricing Two Area end */}
        {/* Testimonial Area Start */}
        <ClientsFeedback />
        {/* Testimonial Area End */}
        {/* Contact Area Start */}
        <section className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-55">
                    <h2>
                      Have any project on mind! feel free contact with us or{" "}
                      <span>say hello</span>
                    </h2>
                  </div>
                  <div className="contact-info-wrap">
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <span className="title">Location</span>
                        <Link href="https://goo.gl/maps/cKiqZn8j2uZpqubs9?q=<latitude>,<longitude>">
                          <b className="text"> VerticalSols Pvt. Ltd. </b>
                        </Link>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-envelope-open-text" />
                      </div>
                      <div className="content">
                        <span className="title">Email Address</span>
                        <b className="text">
                          <a href="mailto:info@verticalsols.com">
                            info@verticalsols.com
                          </a>
                        </b>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <div className="content">
                        <span className="title">Phone No</span>
                        <b className="text">
                          <a href="callto:+92612118776">+92612118776</a>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contact-area-form"
                  className="contact-area-form text-center wow fadeInRight delay-0-2s"
                  name="contact-area-form"
                  action="#"
                  method="post"
                >
                  <h4>Send us Message</h4>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                  <input
                    type="email"
                    id="blog-email"
                    name="blog-email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="form-control"
                    defaultValue=""
                    placeholder="Website"
                    required=""
                  />
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={5}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                  <button type="submit" className="theme-btn">
                    Send messages <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-shapes">
            <img
              className="shape circle"
              src="assets/images/shapes/slider-dots.png"
              alt="Shape"
            />
            <img
              className="shape dots"
              src="assets/images/shapes/contact-dots.png"
              alt="Shape"
            />
            <img
              className="shape wave-line"
              src="assets/images/shapes/contact-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Contact Area End */}
        {/* Blog Area start */}
        <section className="news-blog-area pt-130 pb-75 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get Every Updates</span>
                  <h2>Read Latest News &amp; Blog</h2>
                </div>
              </div>
            </div>
            <div className="row large-gap">
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>Easy Ways to Incorporate Customer Feedback</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author1.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Douglas B. Dickens</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 27 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>How to create modern web site for your business?</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author2.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Carson C. Rhodes</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>How to digital marketing work social networking?</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author3.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Robert T. Evans</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>Easy Ways to Incorporate Customer Feedback</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author4.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Stanley J. Contreras</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};
export default Index;
