import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import Slider from "react-slick";
import { projectThreeActive } from "../../src/sliderProps";
import { useState } from "react";
const Mern = () => {
  const [seeMore, setSeeMore] = useState("");
  const [goldSeemore, setGoldSeemore] = useState("");
  return (
    <Layout>
      <PageBanner
        titleHtml={` MEAN / MERN Stack  WEB  <span>SERVICES</span>`}
        titleText="Pricing Plan"
      />
      {/* Responsive Design Area  start */}
      <section className="what-we-offer my-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="what-we-offer-left mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    What We Offer
                  </span>
                  <h2>
                    MERN and MEAN Development Services for Your Next Big
                    Project.
                  </h2>
                </div>
                <h5>
                  15 Years Of Experience In Website Design &amp; Development
                </h5>

                {/* <Link href="/about">
                  <a className="theme-btn mt-15">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="what-we-offer-right wow fadeInLeft delay-0-2s">
                <p>
                  <b>
                    MERN and MEAN development services leverage the power of
                    Node.js, Express, MongoDB, React, and Angular to build
                    high-performance web applications. Node.js is an
                    open-source, cross-platform runtime environment that allows
                    developers to build server-side applications using
                    JavaScript. It also integrate relational databases such as
                    SQL, MySQL, PostgreSQL, MariaDB and Oracle
                  </b>
                </p>
                <ul className="list-style-four pt-5">
                  <li>
                    <b>
                      Express is a flexible and scalable web application
                      framework for Node.js.
                    </b>
                  </li>
                  <li>
                    <b>
                      MongoDB is a popular NoSQL database that allows for
                      flexible and scalable data storage
                    </b>
                  </li>
                  <li>
                    <b>
                      React is a JavaScript library for building reusable UI
                      interfaces
                    </b>
                  </li>
                  <li>
                    <b>
                      Angular is a TypeScript-based web framework for building
                      complex web applications.
                    </b>
                  </li>

                  <li>
                    <b>
                      Through these framework we can build moderan web
                      application that are dynamic, scalable, and easy to
                      maintain.
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Responsive Design Area  end */}
      {/* Responsive Design Area one start */}

      {/* <section className="responsive-design-area mb-130 rel z-1">
        <div className="container">
          <div className="row large-gap align-items-center">
            <div className="col-lg-6">
              <div className="responsive-design-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Website Development
                  </span>
                  <h2>MEAN / MERN WEB SERVICES</h2>
                </div>
                <p>
                  VerticalSols is the #1 Custom Full Stack Web App Solution
                  Provider which offers a large range of solutions for every
                  business.
                </p>
                <ul className="list-style-four pt-5 pb-30">
                  <li>Functional Website</li>
                  <li>Responsive Design</li>
                  <li>Design Customization</li>
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
      </section> */}
      <section className="features-area pb-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50">
            {/* <span className="sub-title mb-15">Technology Features</span> */}
            <h2>Full Potential Modern Features</h2>
          </div>
          <div className="row row-cols-xl-7 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 justify-content-center">
            <div className="col">
              <div className="feature-item wow fadeInDown delay-0-2s">
                <div className="image">
                  <img src="../assets/images/features/logo2.png" alt="Logo" />
                </div>
                <h5>HTML</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="../assets/images/features/logo3.png" alt="Logo" />
                </div>
                <h5>CSS</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="../assets/images/features/logo1.png" alt="Logo" />
                </div>
                <h5>Bootstrap</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInDown delay-0-2s">
                <div className="image">
                  <img src="../assets/images/features/logo4.png" alt="Logo" />
                </div>
                <h5>JS</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="../assets/images/features/logo5.png" alt="Logo" />
                </div>
                <h5>Angular</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInDown delay-0-2s">
                <div className="image">
                  <img src="../assets/images/features/logo6.png" alt="Logo" />
                </div>
                <h5>React JS</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="../assets/images/features/nextjslogo.png"
                    alt="Logo"
                  />
                </div>
                <h5>Next jS</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="../assets/images/features/expresslogo1.png"
                    alt="Logo"
                  />
                </div>
                <h5>Express JS</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="../assets/images/features/nestjslogo.png"
                    alt="Logo"
                  />
                </div>
                <h5>Nest JS</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="../assets/images/features/nodejslogo.png"
                    alt="Logo"
                  />
                </div>
                <h5>Node JS</h5>
              </div>
            </div>
            <div className="col">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="../assets/images/features/mongodblogo.png"
                    alt="Logo"
                  />
                </div>
                <h5>Mongo DB</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Responsive Design Area one end */}
      <section className="features-area-seven pb-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Working Process</span>
                <h2> Our SDLC Approach </h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="feature-item-seven mt-30 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <h5>Make Strategy</h5>
                <p>
                  Create a user-centric website that meets your goals and
                  engages your audience.
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
                  Effective website design is crucial for successful website
                  development.
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
                  Creating functional websites using various programming
                  languages, tools, and technologies.
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
                  Testing website with various devices and browsers to ensure
                  optimal performance.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-goal" />
                </div>
                <h5>Project Launch</h5>
                <p>
                  Launch a responsive website with engaging content and SEO
                  optimization.
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
      {/* Pricing Area Four start */}
      <section className="pricing-area-four pt-65 pb-165 rel z-1">
        <div className="container">
          <Tab.Container defaultActiveKey={"monthlyTwo"}>
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <div className="pricing-plan-content text-center mb-65 wow fadeInUp delay-0-2s">
                  <div className="section-title text-center mb-30">
                    <span className="sub-title style-two mb-20">
                      Pricing Plan
                    </span>
                    <h3>
                      Choose Your Best Pricing Plan for MEAN / MERN SERVICES
                    </h3>
                  </div>
                  {/* <Nav className="nav pricing-tab mt-15" role="tablist">
                    <li>
                      <Nav.Link
                        eventKey={"monthlyTwo"}
                        as="button"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#monthlyTwo"
                      >
                        Monthly
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        eventKey={"yearlyTwo"}
                        as="button"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#yearlyTwo"
                      >
                        Yearly
                      </Nav.Link>
                    </li>
                  </Nav> */}
                </div>
              </div>
            </div>
            <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
              <Tab.Pane className="tab-pane fade" eventKey="monthlyTwo">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three style-two">
                      {/* <span className="badge">popular</span> */}
                      <h4>Basic</h4>
                      <ul className="list-style-two">
                        <li>pages(1)</li>
                        <li> Functional Website</li>
                        <li> Responsive Design</li>
                        <li>Number of Revisions 1</li>
                        <li>Content Upload</li>
                        <li>Design Customization</li>
                        <li>Source Code</li>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">150</span>
                          <span className="save">
                            Save<span> 25%</span>
                          </span>
                          <Link href="/pricing">
                            <a className="theme-btn style-three">
                              Choose Package
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three style-two">
                      <span className="badge">popular</span>
                      <h4>Standard</h4>
                      <ul className="list-style-two">
                        <li>pages(5)</li>
                        <li> Functional Website</li>
                        <li> Responsive Design</li>
                        <li>Number of Revisions 3</li>
                        <li>Content Upload</li>

                        <li>Design Customization</li>
                        <li>Source Code</li>

                        <div
                          className="seemore"
                          // onClick={() => {
                          //   setSeeMore("show");
                          // }}
                        >
                          {/* {seeMore === "" && "show more"} */}
                        </div>
                        {seeMore === "show" && (
                          <>
                            {/* <li> Moderate SEO</li>
                            <li> Customized Forms</li>
                            <li> Design Customization</li>
                            <li> Blog setup</li>
                            <li>Auto Responder Integration</li> */}
                          </>
                        )}
                        <div
                          className="seemore"
                          // onClick={() => {
                          //   setSeeMore("");
                          // }}
                        >
                          {/* {seeMore === "show" && "show less"} */}
                        </div>
                      </ul>

                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">300</span>
                          <span className="save">
                            Save<span> 25%</span>
                          </span>
                          <Link href="/pricing">
                            <a className="theme-btn style-three">
                              Choose Package
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three style-two">
                      {/* <span className="badge">popular</span> */}
                      <h4>Premium</h4>
                      <ul className="list-style-two">
                        <li>pages(10)</li>
                        <li> Functional Website</li>
                        <li> Responsive Design</li>
                        <li>Number of Revisions 7</li>
                        <li>Content Upload</li>

                        <li>Design Customization</li>
                        <li>Source Code</li>

                        <div
                          className="seemore"
                          // onClick={() => {
                          //   setGoldSeemore("show");
                          // }}
                        >
                          {/* {goldSeemore === "" && "show more"} */}
                        </div>
                        {goldSeemore === "show" && (
                          <>
                            {/* <li> Moderate SEO</li>
                            <li> Customized Forms</li>
                            <li> Design Customization</li>
                            <li> Blog setup</li>
                            <li>Auto Responder Integration</li>
                            <li> E-commerce functionality</li>
                            <li> Products Upload</li>
                            <li> Payment Gateways Integration</li>
                            <li> Opt-in form</li> */}
                          </>
                        )}
                        <div
                          className="seemore"
                          onClick={() => {
                            setGoldSeemore("");
                          }}
                        >
                          {goldSeemore === "show" && "show less"}
                        </div>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">600</span>
                          <span className="save">
                            Save<span> 43%</span>
                          </span>
                          <Link href="/pricing">
                            <a className="theme-btn style-three">
                              Choose Package
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              {/* <Tab.Pane className="tab-pane fade yearly" eventKey="yearlyTwo">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three style-two">
                      <span className="badge">popular</span>
                      <h4>Basic Plan</h4>
                      <ul className="list-style-two">
                        <li>Landing page design (10 pages)</li>
                        <li>HTML+CSS design (12 pages)</li>
                        <li>Social Media Marketing</li>
                        <li>Domin hosting provider</li>
                        <li>Online support (24/7)</li>
                        <li>WordPres development</li>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">382</span>
                          <span className="save">
                            Save<span> 25%</span>
                          </span>
                          <Link href="/pricing">
                            <a className="theme-btn style-three">
                              Choose Package
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three style-two">
                      <span className="badge">popular</span>
                      <h4>Ultra Plan</h4>
                      <ul className="list-style-two">
                        <li>Landing page design (10 pages)</li>
                        <li>HTML+CSS design (12 pages)</li>
                        <li>Social Media Marketing</li>
                        <li>Domin hosting provider</li>
                        <li>Online support (24/7)</li>
                        <li>WordPres development</li>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">805</span>
                          <span className="save">
                            Save<span> 25%</span>
                          </span>
                          <Link href="/pricing">
                            <a className="theme-btn style-three">
                              Choose Package
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three style-two">
                      <span className="badge">popular</span>
                      <h4>Gold Plan</h4>
                      <ul className="list-style-two">
                        <li>Landing page design (10 pages)</li>
                        <li>HTML+CSS design (12 pages)</li>
                        <li>Social Media Marketing</li>
                        <li>Domin hosting provider</li>
                        <li>Online support (24/7)</li>
                        <li>WordPres development</li>
                      </ul>
                      <div className="price-and-btn">
                        <div className="content">
                          <span className="price">1248</span>
                          <span className="save">
                            Save<span> 43%</span>
                          </span>
                          <Link href="/pricing">
                            <a className="theme-btn style-three">
                              Choose Package
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="wave-shapes">
          <img
            className="shape one"
            src="../assets/images/shapes/pricing-bg-wave2.png"
            alt="Wave Shape"
          />
        </div>
      </section>
      {/* Pricing Area Four end */}
    </Layout>
  );
};
export default Mern;
