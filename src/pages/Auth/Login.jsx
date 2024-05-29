import React, { useState } from "react";
import {
  Google_btn,
  Signin_Auth,
  Signup_Auth,
} from "../../services/Authentication";
import { useDispatch } from "react-redux";
import { add_UserInfo } from "../../reducer/AuthSlice";
import { auth } from "../../services/firebase";
import { toast } from "sonner";
import {
  customErrorToaster,
  errorToast,
  successToast,
} from "../../services/Toast";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user_Email, setuser_Email] = useState("");
  const [user_Password, setuser_Password] = useState("");
  const [loader, setloader] = useState(false);
  const [passType, setpassType] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passwordType = (e) => {
    e.preventDefault();
    setpassType(!passType);
    const pass = document.getElementById("password");
    if (pass.type == "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  };

  const login_handler = async (e) => {
    e.preventDefault();
    setloader(true);
    const response = await Signin_Auth(user_Email, user_Password);
    setTimeout(() => {
      try {
        if (response) {
          const title = "Email Verification Needed";
          const desc =
            "We've sent a verification email to your inbox. Please check your email and follow the instructions to complete your verification. If you don't see it, remember to check your spam folder.";
          if (!auth.currentUser.emailVerified) {
            dispatch(add_UserInfo(auth.currentUser));
            customErrorToaster(title, desc);
            setloader(false);
          } else {
            successToast("Login Succesfully !!");
            navigate("/");
            setloader(false);
          }
        } else {
          setloader(false);
        }
      } catch (error) {
        setloader(false);
      }
    }, 3000);
  };
  const google_handler = async () => {
    try {
      const response = await Google_btn();
      if (response) {
        dispatch(add_UserInfo(response.user.auth.currentUser));
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login_container  w-full">
      <div className="login_body md:flex h-screen ">
        <div className="login_image hidden md:block  bg-slate-400 md:w-3/5 ">
          <img
            src="https://images.kataeb.org/new-website/Mix/music.jpeg"
            alt=""
            // srcset=""
            width="100%"
            height="100vh"
          />
        </div>
        <div className="login_form rounded-md  w-full   p-9  md:w-2/4 ">
          <div className="logo p-0 h-4">
            <h4>Logo</h4>
          </div>

          <form action="" className=" pt-10 md:pt-7">
            <h5 className=" text-xl font-bold">Nice to see you again </h5>
            <div className="form_container mt-6 w-full">
              <div className="email">
                <label
                  htmlFor="email"
                  className="text-sm  md:text-lg font-medium leading-6 text-gray-200"
                >
                  Login
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="rounded-md border-0 \text-gray-900 p-4 md:p-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 w-full mt-3   lg:text-xl"
                  onChange={(e) => setuser_Email(e.target.value)}
                  value={user_Email}
                />
              </div>
              <div className="password mt-5 relative ">
                <label
                  htmlFor="password"
                  className="sm:text-sm  md:text-xl  lg:text-lg font-medium leading-6 text-gray-200 "
                >
                  {" "}
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className=" rounded-md border-0 \text-gray-900 p-4 lg:p-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 w-full mt-3   lg:text-lg"
                  onChange={(E) => setuser_Password(E.target.value)}
                  value={user_Password}
                />
                <div className="pass pt-4">
                  <button
                    className=" p-0 absolute top-12 right-2  bg-transparent border-none hover:border-none focus:border-none"
                    onClick={passwordType}
                  >
                    {passType ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 border-none hover:border-none focus:border-none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 border-none hover:border-none focus:border-none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="forgot_p">
                <p className="text-blue-500 hover:text-blue-600  cursor-pointer capitalize mt-3 text-right">
                  {" "}
                  forgot password
                </p>
              </div>
              {loader == false ? (
                <>
                  {" "}
                  <button
                    className="bg-blue-600 w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11 "
                    onClick={login_handler}
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-600 w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11 animate-pulse"
                    disabled
                  >
                    Please Wait ...
                  </button>
                </>
              )}

              <hr className="mt-10 text-gray-500" />

              <div className="w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11 ">
                <GoogleButton
                  type="dark"
                  className="googlebtn"
                  style={{ width: "100%" }}
                  onClick={google_handler}
                />
              </div>

              <p className="not_account mt-5 text-center ">
                Don't have an account ? <a href="/signup"> Signup Now</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
