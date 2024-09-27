import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import Slider from "react-slick";
import { projectThreeActive } from "../../src/sliderProps";
import { useState } from "react";
const GoogleAds = () => {
  const [seeMore, setSeeMore] = useState("");
  const [goldSeemore, setGoldSeemore] = useState("");
  return (
    <Layout>
      <PageBanner
        titleHtml={` Google Ads Compaign  <span>SERVICES</span>`}
        titleText="Pricing Plan"
      />
      {/* Responsive Design Area start */}
 <section className="responsive-design-area mb-130 rel z-1">
        <div className="container">
          <div className="row large-gap align-items-center">
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
                  provide an optimal experience on any device it’s being viewed
                  from. This means that your website will look great and
                  function flawlessly for a user on a desktop computer, laptop,
                  tablet, or smartphone
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
                      Choose Your Best Pricing Plan for Google Ads Compaign
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
                        <li>Full setup of 1 Google search</li>
                        <li> Ads campaign</li>
                        <li> 7 days management and optimization</li>
                        <li>Daily update</li>
                        <li>Social icons</li>
                        <li> Sliders & Carousel</li>
                        <li> Account setup</li>
                        <li> Campaign QA</li>
                        <li> Ongoing management </li>
                        <li> Ad extensions (3)</li>
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
                        <li>Full setup of 1 Google search</li>
                        <li> Ads campaign</li>
                        <li> 14 days management and optimization</li>
                        <li>Daily update</li>
                        <li>Social icons</li>
                        <li> Sliders & Carousel</li>
                        <li> Account setup</li>
                        <li> Campaign QA</li>
                        <li> Ongoing management </li>
                        <li> Ad extensions (6)</li>
                        {/* <div
                          className="seemore"
                          onClick={() => {
                            setSeeMore("show");
                          }}
                        >
                          {seeMore === "" && "show more"}
                        </div>
                        {seeMore === "show" && (
                          <>
                            <li> Moderate SEO</li>
                            <li> Customized Forms</li>
                            <li> Design Customization</li>
                            <li> Blog setup</li>
                            <li>Auto Responder Integration</li>
                          </>
                        )}
                        <div
                          className="seemore"
                          onClick={() => {
                            setSeeMore("");
                          }}
                        >
                          {seeMore === "show" && "show less"}
                        </div> */}
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
                        <li>Full setup of 1 Google search</li>
                        <li> Ads campaign</li>
                        <li> 30 days management and optimization</li>
                        <li>Daily update</li>
                        <li>Social icons</li>
                        <li> Sliders & Carousel</li>
                        <li> Account setup</li>
                        <li> Campaign QA</li>
                        <li> Ongoing management </li>
                        <li> Ad extensions (10) </li>

                        {/* <div
                          className="seemore"
                          onClick={() => {
                            setGoldSeemore("show");
                          }}
                        >
                          {goldSeemore === "" && "show more"}
                        </div>
                        {goldSeemore === "show" && (
                          <>
                            <li> Moderate SEO</li>
                            <li> Customized Forms</li>
                            <li> Design Customization</li>
                            <li> Blog setup</li>
                            <li>Auto Responder Integration</li>
                            <li> E-commerce functionality</li>
                            <li> Products Upload</li>
                            <li> Payment Gateways Integration</li>
                            <li> Opt-in form</li>
                          </>
                        )}
                        <div
                          className="seemore"
                          onClick={() => {
                            setGoldSeemore("");
                          }}
                        >
                          {goldSeemore === "show" && "show less"}
                        </div> */}
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
                              Choose Package{" "}
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
export default GoogleAds;
