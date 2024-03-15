import React from "react";
import { useState } from "react";
import "../SubscribeModal.css";
import { ImCross } from "react-icons/im";

export const Modal = ({ openModal, setOpenModal }) => {
  const [input, setInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const sendEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
      // Send the email-----------
      setEmailSend(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 100000);
      // setEmailSend(true);
      // setTimeout(() => {
      //   setOpenModal(false);
      // }, 1000);
    }
  };
  // const sendEmail = () => {

  // };

  return (
    <>
      {!emailSend && (
        <div className="main-container">
          <div className="main-content-container">
            <div className="modal-container">
              <div className="close-icon" onClick={() => setOpenModal(false)}>
                <ImCross size={15}/>
              </div>{" "}
              {/* Close icon */}
              <div className="left-img-container">
                <img src="/signup_modal_img.jpg" alt="img" />
              </div>
              <div className="right-form-container">
                <p className="right-form-title">Subscribe to our newsletter</p>
                <div>
                  <div className="modal-text">
                    An email will be sent to you every week. The email contains
                    new information and benefits of using our platform.
                  </div>
                </div>
                <div>
                  <div className="modal-input-label">
                    <label className="modal--input-text">Email address</label>
                    <input
                      placeholder="Email"
                      className="modal-input"
                      label={"Input"}
                      type="email"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && (
                      <div className="error-message">
                        Please enter a valid email.
                      </div>
                    )}
                  </div>
                  <div className="modal-buttons-container">
                    <button
                      className="modal-footer-button modal-button-send"
                      onClick={sendEmail}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {emailSend && (
        <div className="main-content-container">
          <div className="modal-email-sent-text">
            <div>
              <p>Subscribed to LIT Newsletter!</p>
            </div>
            <div>
              <p>Thank You..</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
