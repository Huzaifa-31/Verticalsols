import { Component, Fragment } from "react";
import Slider from "react-slick";
export default class ClientsFeedback extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      speed: 400,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <section className="testimonial-area-two rel z-1 mt-130 mb-120">
          <div className="container for-middle-border">
            <div className="row justify-content-between align-items-center pb-90 rpb-35 wow fadeInUp delay-0-2s">
              <div className="col-xl-7 col-lg-8">
                <div className="section-title">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>Clients feedback</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="slider-arrow-btns text-lg-end">
                  <button
                    className="work-prev slick-arrow"
                    onClick={this.previous}
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button className="work-next slick-arrow" onClick={this.next}>
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <Slider
              className="testimonial-two-active"
              {...settings}
              ref={(c) => (this.slider = c)}
            >
              <div className="testimonial-item-two wow fadeInUp delay-0-2s">
                <div className="testimonial-author">
                  <img src="assets/images/clients/charles.webp" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Outstanding IT services from VerticalSols! Skilled team &
                    timely support made all the difference. Highly recommend!
                  </p>
                  <div className="author-description">
                    <span className="h5">Charles La haye</span>
                    <span className="designation">Real Estate Expert</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-4s">
                <div className="testimonial-author">
                  <img src="assets/images/clients/tom.webp" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p>
                    They completed everything I asked for, even things I thought
                    of along the way. quick response times on questions and
                    completions.
                  </p>
                  <div className="author-description">
                    <span className="h5">Tom Aspell</span>
                    <span className="designation">Founder Viral Media</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-2s">
                <div className="testimonial-author">
                  <img src="assets/images/clients/yasin.webp" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Extremely fast and efficient in creating Website for me.
                    Also, very patient with multiple rounds of updates. I will
                    Hire Again for any future projects.
                  </p>
                  <div className="author-description">
                    <span className="h5">Yasin Najibi</span>
                    <span className="designation">CEO at Bridgewater</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-4s">
                <div className="testimonial-author">
                  <img src="assets/images/clients/martijn.webp" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Amazing experience with VerticalSols! Their solutions
                    streamlined my business & boosted efficiency. Top-notch IT
                    provider!
                  </p>
                  <div className="author-description">
                    <span className="h5">Martijn</span>
                    <span className="designation">Marketing at MEXEM</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-4s">
                <div className="testimonial-author">
                  <img
                    src="assets/images/clients/alexander.webp"
                    alt="Author"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Very quick, easy and efficient Team to work with. Takes
                    direction very well. This is my second time working with
                    them. Thank you!
                  </p>
                  <div className="author-description">
                    <span className="h5">Alexander Nilsen</span>
                    <span className="designation">Entrepreneur</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-4s">
                <div className="testimonial-author">
                  <img src="assets/images/clients/austen.webp" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Fast and reliable IT services! The team at Verticalsols
                    solved our tech issues with ease. Highly recommend their
                    expertise and excellent Support.
                  </p>
                  <div className="author-description">
                    <span className="h5">Austen P.</span>
                    <span className="designation">
                      Manager at Moneta Markets
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-4s">
                <div className="testimonial-author">
                  <img src="assets/images/clients/wildson.webp" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Great experience! Easy and quick comunication. Great skills.
                    Certainly, we will work together again soon. Thanks a lot!
                  </p>
                  <div className="author-description">
                    <span className="h5">Wildson Caldeira</span>
                    <span className="designation">CMO at Prátis CRM</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
