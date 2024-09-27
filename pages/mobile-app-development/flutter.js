import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import Slider from "react-slick";
import { projectThreeActive } from "../../src/sliderProps";
import { useState } from "react";
const Flutter = () => {
  const [seeMore, setSeeMore] = useState("");
  const [goldSeemore, setGoldSeemore] = useState("");
  return (
    <Layout>
      <PageBanner
        titleHtml={` Flutter Development  <span>SERVICES</span>`}
        titleText="Pricing Plan"
      />
      {/* Responsive Design Area start */}
      <section className="what-we-offer my-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="what-we-offer-left mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    What We Offer
                  </span>
                  <h2>Mastering Cross Platform App Development with Flutter</h2>
                </div>
                <h5>
                  15 Years Of Experience In Mobile App Design &amp; Development
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
                    we provide top-notch Flutter development services to help
                    our clients build high-performing, visually stunning mobile
                    apps. Flutter's powerful framework to build cross-platform
                    apps for both iOS and Android platforms, leveraging its fast
                    development cycle and hot reload feature to deliver apps
                    faster and more efficiently. Our services include
                    user-friendly interface design, integration of third-party
                    plugins and pre-built components, testing and quality
                    assurance, deployment, and ongoing maintenance and support.
                  </b>
                </p>
                <ul className="list-style-four pt-5">
                  <li>
                    <b>Custom app developmen</b>
                  </li>
                  <li>
                    <b>
                      Cross-platform app development for both iOS and Android
                      platforms
                    </b>
                  </li>
                  <li>
                    <b>User-friendly interface design and development</b>
                  </li>
                  <li>
                    <b>ntegration of third-party plugins</b>
                  </li>
                  <li>
                    <b>Efficient app development</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Responsive Design Area end */}
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
                  Create a user-centric mobile App that meets your goals and
                  engages your audience.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-graphic-design" />
                </div>
                <h5>Mobile App Design</h5>
                <p>
                  Effective Mobile App design is crucial for successful website
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
                  Creating functional Mobile App using various programming
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
                  Testing Mobile App with various devices and browsers to ensure
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
                  Launch a responsive Mobile App with engaging content and SEO
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
                      Choose Your Best Pricing Plan for Flutter Development
                      SERVICES
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
                        <li> 3 screen for ios and andriod </li>
                        <li> Functional app</li>

                        <li> Include Source code </li>
                        <li> Mobile operating system (2) </li>
                        <li> Revisions (1) </li>
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
                        <li> 10 screen for ios and andriod </li>
                        <li> Functional app</li>

                        <li> Include Source code </li>
                        <li> Mobile operating system (2) </li>

                        <div
                          className="seemore"
                          onClick={() => {
                            setSeeMore("show");
                          }}
                        >
                          {seeMore === "" && "show more"}
                        </div>
                        {seeMore === "show" && (
                          <>
                            <li> Revisions (1) </li>
                            <li>App icon</li>
                            <li> Splash screen</li>
                          </>
                        )}
                        <div
                          className="seemore"
                          onClick={() => {
                            setSeeMore("");
                          }}
                        >
                          {seeMore === "show" && "show less"}
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
                              Choose Package{" "}
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
                        <li> full stack app with frontend & server </li>
                        <li>Functional app</li>
                        <li> Include Source code </li>
                        <li> Mobile operating system (2) </li>

                        <div
                          className="seemore"
                          onClick={() => {
                            setGoldSeemore("show");
                          }}
                        >
                          {goldSeemore === "" && "show more"}
                        </div>
                        {goldSeemore === "show" && (
                          <>
                            <li> Revisions (1) </li>
                            <li>App icon</li>
                            <li> Splash screen</li>
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
                              Choose Package{" "}
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade yearly" eventKey="yearlyTwo">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-plan-three style-two">
                      {/* <span className="badge">popular</span> */}
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
                              Choose Package{" "}
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
                              Choose Package{" "}
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
                              Choose Package{" "}
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
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
export default Flutter;
