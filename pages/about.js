import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { feedbackActive, teamSliderActive } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Abo<span>ut us</span>`} titleText="About" />
      <section className="ww-do-two-area py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-12 col-lg-12 mb-30">
              <div className="ww-do-two-content rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30 text-center ">
                  {/* <span className="sub-title style-two mb-15">What We Do</span> */}
                  <h2>WHO WE ARE?</h2>
                </div>
                <p>
                  Verticalsols is a reputable and leading IT company that offers
                  a wide range of services to businesses and organizations. With
                  a focus on providing high-quality solutions, Verticalsols has
                  established itself as a trusted partner for clients looking to
                  enhance their technology infrastructure and digital
                  capabilities. One of the key strengths of Verticalsols is its
                  team of highly skilled and experienced professionals. The
                  company employs experts in various areas of IT, including
                  software development, web design, cybersecurity, cloud
                  computing, and more. With this diverse expertise, Verticalsols
                  is able to offer comprehensive solutions that meet the unique
                  needs and requirements of each client. Verticalsols is also
                  known for its commitment to innovation and staying at the
                  forefront of emerging technologies. The company invests
                  heavily in research and development to ensure that it can
                  provide the most advanced and cutting-edge solutions to its
                  clients. This includes exploring new technologies such as
                  artificial intelligence, blockchain, and the Internet of
                  Things. Some of the key services offered by Verticalsols
                  include software development, web design and development,
                  mobile app development, cybersecurity, cloud computing, and IT
                  consulting. The company has worked with clients across various
                  industries, including healthcare, finance, retail, and more.
                  Overall, Verticalsols is a leading IT company that has built a
                  strong reputation for providing high-quality solutions and
                  exceptional customer service. With its experienced team,
                  commitment to innovation, and diverse range of services,
                  Verticalsols is well-positioned to help businesses and
                  organizations achieve their technology goals and drive success
                  in the digital age.
                </p>
                {/* <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="feature-item-two border-right pe-sm-3">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>Customize Website</h5>
                      <p>
                        Pick a template customize anything answer or question
                        website design just you.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-item-two color-two">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>Premium Design</h5>
                      <p>
                        Start your own blog, add an online store and accept
                        bookings online always.
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="ww-do-btns">
                  <Link href="/about">
                    <a className="theme-btn mt-15">
                      Create Your Website
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  {/* <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play-text mt-15"
                  >
                    <i className="fas fa-play" /> <span>Watch Videos</span>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="ww-do-two-images rel">
                <div className="row">
                  <div className="col-sm-7 offset-1">
                    <img
                      className="image-one wow fadeInUp delay-0-4s"
                      src="assets/images/about/ww-do-two1.jpg"
                      alt="What We Do"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="image-two wow fadeInUp delay-0-6s"
                      src="assets/images/about/ww-do-two2.jpg"
                      alt="What We Do"
                    />
                    <img
                      className="image-three wow fadeInUp delay-0-8s"
                      src="assets/images/about/ww-do-two3.jpg"
                      alt="What We Do"
                    />
                  </div>
                </div>
                <div className="year-of-experience wow zoomIn delay-0-6s">
                  <span className="number">25</span>
                  Years Of Web Experience
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* What We Do Two Area end */}
      {/* Statistics Four Area start */}
      <div className="statistics-area-four rel z-1">
        <div className="container">
          <div
            className="statistics-four-counters bgs-cover bgc-lighter"
            style={{
              backgroundImage: "url(assets/images/background/counter-bg.png)",
            }}
          >
            <div className="row medium-gap">
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-30 counter-text-wrap wow fadeInLeft delay-0-2s">
                  <i className="flaticon-startup" />
                  <Counter end={950} />
                  <span className="counter-title">Projects complete</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-4s">
                  <i className="flaticon-global" />
                  <Counter end={700} />
                  <span className="counter-title">Happy Clients</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-20 counter-text-wrap wow fadeInLeft delay-0-6s">
                  <i className="flaticon-rating" />
                  <Counter end={2} />
                  <span className="counter-title">Branches</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-8s">
                  <i className="flaticon-trophy" />
                  <Counter end={15} />
                  <span className="counter-title">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Four Area end */}
      {/* Video Area start */}
      <section className="video-area bgc-black pt-250">
        <div className="container">
          <div className="row medium-gap align-items-end pt-80">
            <div className="col-lg-6">
              <div className="video-part rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/background/video-bg.jpg" alt="Video" />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-content text-white pb-95 rpb-115 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <h2>
                    15 years of experience in this world, being the first and
                    foremost choice of business people.
                  </h2>
                </div>
                <ul className="list-style-three">
                  <li>An abundance of resources</li>
                  <li>Add advanced features</li>
                  <li>Support that Helps</li>
                  <li>Edit your mobile view</li>
                  <li>State of the art security</li>
                  <li>Optimize search engines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Area End */}
      {/* Team Area start */}
      <section className="team-slider-area pt-210 pb-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title style-two mb-15">Amazing Team</span>
                <h2>We Have Well Experience Team Member</h2>
              </div>
            </div>
          </div>
          <Slider {...teamSliderActive} className="team-slider-active">
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/team/member1.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Senior Manager</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/team/member2.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Web Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/team/member3.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Michael D. Jackson</Link>
                </h5>
                <span className="designation">Business Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/team/member4.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Damian S. Madison</Link>
                </h5>
                <span className="designation">Product Designer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/team/member1.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Senior Manager</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/team/member2.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Web Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/team/member3.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Michael D. Jackson</Link>
                </h5>
                <span className="designation">Business Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/team/member4.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Damian S. Madison</Link>
                </h5>
                <span className="designation">Product Designer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Team Area end */}
      {/* Feature Six Area start */}
      <section className="freature-area-six rel z-2">
        <div className="container">
          <div
            className="feature-six-inner bgs-cover bgc-primary"
            style={{
              backgroundImage:
                "url(assets/images/background/freature-bg-line.png)",
            }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item-three wow fadeInRight delay-0-3s">
                  <i className="flaticon-technical-support" />
                  <div className="content">
                    <h4>Customize your site</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-two wow fadeInRight delay-0-5s">
                  <i className="flaticon-app-development" />
                  <div className="content">
                    <h4>Edit your mobile view</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-three wow fadeInRight delay-0-4s">
                  <i className="flaticon-settings" />
                  <div className="content">
                    <h4>Add advanced features</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-four wow fadeInRight delay-0-6s">
                  <i className="flaticon-optimization" />
                  <div className="content">
                    <h4>Optimize for search engines</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Six Area end */}
      {/* Feedback Area start */}
      <section className="feedback-area bgc-lighter pt-250 pb-130 rel z-1">
        <div className="container pt-130">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20">
                  Customers reviews
                </span>
                <h2>What Our Clients Have to Say</h2>
              </div>
            </div>
          </div>
          <Slider {...feedbackActive} className="feedback-active">
            <div
              className="feedback-item wow fadeInUp delay-0-2s"
            >
              <div className="author-logo">
                <i className="far fa-quote-right" />
                {/* <img src="assets/images/feedback/logo1.png" alt="Logo" /> */}
              </div>
              {/* <h4>On the other hand denounes with indignwy</h4> */}
              <p>
                Extremely fast and efficient in creating Website for me. Also,
                very patient with multiple rounds of updates. I will Hire Again
                for any future projects.
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/yasin.webp" alt="Author" />
                <div className="content">
                  <h5>Yasin Najibi</h5>
                  <span> CEO at Bridgewater</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-4s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                {/* <img src="assets/images/feedback/logo2.png" alt="Logo" /> */}
              </div>
              {/* <h4>Custom programming fores most complex functions</h4> */}
              <p>
                Very quick, easy and efficient Team to work with. Takes
                direction very well. This is my second time working with them.
                Thank you!
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/alexandar.webp" alt="Author" />
                <div className="content">
                  <h5>Alexander Nilsen</h5>
                  <span>Entrepreneur</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-6s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                {/* <img src="assets/images/feedback/logo3.png" alt="Logo" /> */}
              </div>
              {/* <h4>We use strategic marketing tactics be proven work.</h4> */}
              <p>
                Outstanding IT services from VerticalSols! Skilled team & timely
                support made all the difference. Highly recommend!
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/charles.webp" alt="Author" />
                <div className="content">
                  <h5>Charles La haye</h5>
                  <span>Real Estate Expert</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                {/* <img src="assets/images/feedback/logo1.png" alt="Logo" /> */}
              </div>
              {/* <h4>On the other hand denounes with indignwy</h4> */}
              <p>
                Fast and reliable IT services! The team at Verticalsols solved
                our tech issues with ease. Highly recommend their expertise and
                excellent Support.
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/austen.webp" alt="Author" />
                <div className="content">
                  <h5>Austen P.</h5>
                  <span>Manager at Moneta Markets</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                {/* <img src="assets/images/feedback/logo2.png" alt="Logo" /> */}
              </div>
              {/* <h4>Custom programming fores most complex functions</h4> */}
              <p>
                They completed everything I asked for, even things I thought of
                along the way. quick response times on questions and
                completions.
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/tomaspel.webp" alt="Author" />
                <div className="content">
                  <h5>Tom Aspell</h5>
                  <span>Founder Viral Media</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                {/* <img src="assets/images/feedback/logo3.png" alt="Logo" /> */}
              </div>
              {/* <h4>We use strategic marketing tactics be proven work.</h4> */}
              <p>
                Great experience! Easy and quick comunication. Great skills.
                Certainly, we will work together again soon. Thanks a lot!
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/wildson.webp" alt="Author" />
                <div className="content">
                  <h5>Wildson Caldeira</h5>
                  <span>CMO at Prátis CRM</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                {/* <img src="assets/images/feedback/logo3.png" alt="Logo" /> */}
              </div>
              {/* <h4>We use strategic marketing tactics be proven work.</h4> */}
              <p>
                Amazing experience with VerticalSols! Their solutions
                streamlined my business & boosted efficiency. Top-notch IT
                provider!
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/martijn.webp" alt="Author" />
                <div className="content">
                  <h5>Martijn</h5>
                  <span>Marketing at MEXEM</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="feedback-shape one">
          <img src="assets/images/feedback/man1.jpg" alt="Man Shape" />
        </div>
        <div className="feedback-shape two">
          <img src="assets/images/feedback/man2.jpg" alt="Man Shape" />
        </div>
      </section>
      {/* Feedback Area end */}
    </Layout>
  );
};
export default About;
