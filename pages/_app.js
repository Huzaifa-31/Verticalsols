import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/redux/reducers/authReducer";
import "react-toastify/dist/ReactToastify.css";
export const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Head>
          <title>Verticalsols Pvt.LTD</title>
          <link
            rel="shortcut icon"
            href="assets/images/logos/iconlogo.svg"
            type="image/x-icon"
          />
          <link rel="stylesheet" href="assets/css/flaticon.min.css" />

          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Kumbh+Sans:wght@400;500;700&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />

          {/* Font Awesome */}
          <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
          {/* Bootstrap */}
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          {/* Magnific Popup */}
          <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
          {/* Nice Select */}
          <link rel="stylesheet" href="assets/css/nice-select.min.css" />
          {/* Type Writer */}
          <link
            rel="stylesheet"
            href="assets/css/jquery.animatedheadline.css"
          />
          {/* Animate */}
          <link rel="stylesheet" href="assets/css/animate.min.css" />
          {/* Slick */}
          <link rel="stylesheet" href="assets/css/slick.min.css" />
          {/* Main Style */}
          <link rel="stylesheet" href="./assets/css/style.css" />
        </Head>
        <Component {...pageProps} />
        <ToastContainer />
      </Fragment>
    </Provider>
  );
}

export default MyApp;
