import { toast } from "react-toastify";

export const navigationHover = () => {};
// Sticky nav
export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".main-header");
  for (let i = 0; i < sticky.length; i++) {
    const stick = sticky[i];
    if (stick) {
      if (offset > 10) {
        stick.classList.add("fixed-header");
      } else {
        stick.classList.remove("fixed-header");
      }
    }
  }
};

// Animation with wowjs
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// sidebar toggle
export const sideBarToggle = () => {
  const body = document.querySelector("body");
  body.classList.toggle("side-content-visible");
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const toastStyle = {
  position: "top-center",
  closeDuration: 1000,
};

export const toastError = (message) => {
  toast.error(message, {
    position: toastStyle.position,
    autoClose: toastStyle.closeDuration,
  });
};
export const toastSuccess = (message) => {
  console.log("message", message);
  toast.success(message, {
    position: toastStyle.position,
    autoClose: toastStyle.closeDuration,
  });
};
