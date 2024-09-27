import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { createContactUs } from "../../api/api";
import { toastSuccess } from "../../utils";
import { BsX } from "react-icons/bs";

const PopupModal = ({ show, closeCb, openModalFromHeader }) => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const createContact = async () => {
    const response = await createContactUs(fullName, emailAddress);
    if (response.success) {
      toastSuccess(response.message);
      closeCb();
    }
  };
  return (
    <Modal
      open={show}
      onClose={closeCb}
      closeOnOverlayClick={true}
      showCloseIcon={false}
      classNames={{
        overlay: "customOverlay",
        modal: "largeModal",
        closeButton: " blueCloseModel",
      }}
    >
      {openModalFromHeader && (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contactForm"
                  className="contactForm z-1 rel"
                >
                  <a
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "end",
                      fontSize: "20px",
                    }}
                  >
                    <BsX onClick={closeCb} />
                  </a>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Michael C. Coleman"
                          required=""
                          data-error="Please enter your name"
                          onChange={(e) => {
                            setFullName(e.target.value);
                          }}
                          value={fullName}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required=""
                          data-error="Please enter your Email"
                          onChange={(e) => {
                            setEmailAddress(e.target.value);
                          }}
                          value={emailAddress}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue=""
                          placeholder="+000 (123) 456 88"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="select_subject">
                          Select Requirments
                        </label>
                        <select name="select_subject" id="select_subject">
                          <option value="default" selected="">
                            Website customize
                          </option>
                          <option value="Design">Design</option>
                          <option value="Development">Development</option>
                          <option value="SEO">SEO</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="file">Upload File</label>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          className="form-control"
                          defaultValue=""
                          placeholder="file"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Write Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn w-100"
                          onClick={() => {
                            createContact();
                          }}
                        >
                          Send Message{" "}
                          <i className="fas fa-angle-double-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PopupModal;
