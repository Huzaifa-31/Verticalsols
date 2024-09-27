import Link from "next/link";
import PopupModal from "../components/popup/Popup";
import { useState } from "react";
import Lottie from "react-lottie-player";
import mobileAnimation from "../lottie-json/mobile-app2.json";
import webAnimation from "../lottie-json/mern.json";
import marketing from "../lottie-json/marketing.json";
import laravelAnimation from "../lottie-json/laravel.json";
import wordpressAnimation from "../lottie-json/wordpress.json";
import shopifyAnimation from "../lottie-json/shopify.json";
import flutterAnimation from "../lottie-json/flutter.json";
import socilaMediaAnimation from "../lottie-json/socialmedia.json";
import emailAnimation from "../lottie-json/emailmarketing.json";
import googleAnimation from "../lottie-json/googleads.json";
import graphicAnimation from "../lottie-json/graphic.json";
import logoAnimation from "../lottie-json/logo.json";
import projectAnimation from "../lottie-json/projects.json";
import { useRouter } from "next/router";
const PageBanner = ({ titleHtml }) => {
  const [openModalFromHeader, setOpenModalModalFromHeader] = useState(false);
  const { pathname } = useRouter();
  const mobileApp = pathname === "/mobile-app-development/react-native";
  const webApp = pathname === "/website-development/mern";
  const webApplaravel = pathname === "/website-development/laravel";
  const webAppWordpress = pathname === "/website-development/wordpress";
  const digitalMarketing = pathname === "/digital-marketing/seo";
  const webAppshopify = pathname === "/website-development/shopify";
  const flutterMobile = pathname === "/mobile-app-development/flutter";
  const socialMedia = pathname === "/digital-marketing/social-media";
  const emailMarketing = pathname === "/digital-marketing/email-marketing";
  const googleMarketing = pathname === "/digital-marketing/google-ads";
  const graphicDesign = pathname === "/graphic-design/ui-ux";
  const logoDesign = pathname === "/graphic-design/graphic";
  const projectDesign = pathname === "/projects";
  console.log("webApp==>>>>", webApp);
  return (
    <section className="page-banner-area pt-150 rpt-150 pb-170 rpb-100 rel z-1 bgc-lighter text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-inner rpt-10">
              <h5
                className="page-title wow fadeInUp delay-0-2s heading"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              ></h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                  <p>
                    Deal with Your Strategic Business Plans & Leave IT
                    Operations to Us.Deal with Your Strategic Business Plans &
                    Leave IT Operations to Us. Deal with Your Strategic Business
                    Plans & Leave IT Operations to Us.Deal with Your Strategic
                    Business Plans & Leave IT Operations to Us. Deal with Your
                    Strategic Business Plans & Leave IT Operations to Us.Deal
                    with Your Strategic Business Plans & Leave IT Operations to
                    Us.
                  </p>
                  <button
                    onClick={() => {
                      setOpenModalModalFromHeader(true);
                    }}
                    type="submit"
                    className="theme-btn"
                  >
                    Request a call
                  </button>

                  <div className="menu-btns">
                    <button className="theme-btn">
                      Get a Quote <i className="fas fa-angle-double-right" />
                    </button>
                  </div>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-lg-6">
            <Lottie
              loop
              animationData={
                mobileApp
                  ? mobileAnimation
                  : digitalMarketing
                  ? marketing
                  : webApp
                  ? webAnimation
                  : webApplaravel
                  ? laravelAnimation
                  : webAppWordpress
                  ? wordpressAnimation
                  : webAppshopify
                  ? shopifyAnimation
                  : flutterMobile
                  ? flutterAnimation
                  : socialMedia
                  ? socilaMediaAnimation
                  : emailMarketing
                  ? emailAnimation
                  : googleMarketing
                  ? googleAnimation
                  : graphicDesign
                  ? graphicAnimation
                  : logoDesign
                  ? logoAnimation
                  : projectDesign
                  ? projectAnimation
                  : ""
              }
              play
            />
          </div>

          {openModalFromHeader && (
            <PopupModal
              show={openModalFromHeader}
              openModalFromHeader={openModalFromHeader}
              closeCb={() => {
                setOpenModalModalFromHeader(false);
              }}
            />
          )}

          <div className="banner-shapes">
            <div
              className="circle wow zoomInLeft delay-0-2s"
              data-wow-duration="2s"
            />
            <img
              className="shape-one"
              src="../assets/images/shapes/hero-shape1.png"
              alt="Shape"
            />
            <img
              className="shape-two"
              src="../assets/images/shapes/hero-shape2.png"
              alt="Shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
