import React, { useState, useContext, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { LoginContext } from "../LoginContext";
import { Link } from "react-router-dom";
import SignUp from "./SignUpPage";

const LoginPage = ({ openLoginModal, setOpenLoginModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [resopnseSend, setResponseSend] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  // const { loginStatus, setLoginStatus } = useContext(LoginContext);

  const sendForm = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || !password) {
      if (!email || !emailRegex.test(email)) {
        setErrorMsg("Please enter a valid email.");
      } else if (!password) {
        setErrorMsg("Please enter a valid password.");
      }
      setError(true);


    } else {
      setError(false);
      // Send the form data to the backend server to check user exist or not??
      try {
        // const response = await axios.post("/api/login", {
        //   "email": email,
        //   "password": password,
        // });
        
        // Save the token to local storage
        localStorage.setItem("token", "userisloggedin");//response.data.token used instead of string // Save the token to local storage
        // if (localStorage.getItem("token")) {
        //   console.log("User is logged in");
        // } else {
        //   console.log("User is not logged in");
        // }
        setResponseSend(true);
        // setLoginStatus(true);
        console.log("User is logged in");
        
        setTimeout(() => {
          setOpenLoginModal(false);
          setResponseSend(false);
        }, 1000);
      } catch (error) {
        console.error("Error sending form data", error);
      }
    }
  };

  return (
    <>
      {!resopnseSend && (
        <div className="main-container">
          <div className="main-content-container">
            <div className="modal-container">
              <div
                className="close-icon"
                onClick={() => setOpenLoginModal(false)}
              >
                <ImCross size={15} />
              </div>{" "}
              {/* Close icon */}
              <div className="left-img-container">
                <img src="/signup_modal_img.jpg" alt="img" />
              </div>
              <div className="right-form-container">
                <p className="right-form-title">LUXURY IN TASTE</p>
                <div>
                  <div className="modal-text">
                    Sign in to get access to the latest news and updates.
                  </div>
                </div>
                <div>
                  <div className="modal-input-label">
                    {/* <label className="modal--input-text">Username</label>
                    <input
                      placeholder="Username"
                      className="modal-input"
                      label={"Input"}
                      type="text"
                      required={true}
                      onChange={(e) => setUsername(e.target.value)}
                    /> */}

                    <label className="modal--input-text">Email address</label>
                    <input
                      placeholder="Email"
                      className="modal-input"
                      label={"Input"}
                      type="email"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="modal--input-text">Password</label>
                    <input
                      placeholder="Password"
                      className="modal-input"
                      label={"Input"}
                      type="password"
                      required={true}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="error-message">{errorMsg}</div>}
                  </div>
                  <div className="modal-buttons-container">
                    <button
                      className="modal-footer-button modal-button-send"
                      onClick={sendForm}
                    >
                      Login
                    </button>
                  </div>
                  <div className="sign-up-option">
                  Don't have an account? <div onClick={()=>{
                    // setOpenLoginModal(false);
                    setOpenSignUpModal(true);
                  }} className="modal-login-signup-option">Sign Up</div>
                </div>
                </div>

                <div className="modal-other-login-options"> 
                  <div>----- or -----</div>
                  {/* button to log in with google */}
                  <button className="modal-button-google">
                    <div className="modal-button-google-container">
                      <FcGoogle size={20} style={{marginRight:"5px"}}/>Login with Google
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {resopnseSend && (
        <div className="main-content-container">
          <div className="modal-email-sent-text">
            <div>
              <p>Logged In Successfully</p>
            </div>
            <div>
              <p>Thank You..</p>
            </div>
          </div>
        </div>
      )}
      {openSignUpModal && (
        <SignUp
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )
      }
    </>
  );
};

export default LoginPage;
