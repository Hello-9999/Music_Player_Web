import React from "react";

const Login = () => {
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
        <div className="login_form rounded-md  w-full   p-3 md:p-9 md:w-2/4 ">
          <div className="logo p-0 h-4">
            <h4>Logo</h4>
          </div>

          <form action="" className=" mt-10">
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
                  className="rounded-md border-0 \text-gray-900 p-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full mt-3 text-lg"
                />
              </div>
              <div className="password mt-3">
                <label
                  htmlFor="password"
                  className="text-sm  md:text-lg font-medium leading-6 text-gray-200"
                >
                  {" "}
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="Enter password"
                  className=" rounded-md border-0 \text-gray-900 p-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full mt-3 text-lg"
                />
              </div>

              <div className="forgot_p">
                <p className="text-blue-500 hover:text-blue-600  cursor-pointer capitalize mt-3 text-right">
                  {" "}
                  forgot password
                </p>
              </div>

              <button className="bg-blue-600 w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11">
                {" "}
                Sign in
              </button>

              <hr className="mt-5 text-gray-500" />

              <div className="withgoogle mt-4">
                <button
                  className="bg-gray-900 w-full md:w-3/4 md:mx-11"
                  style={{ backgroundColor: "#131314" }}
                >
                  Sign in with Google
                </button>
              </div>

              <p className="not_account mt-5 text-center ">
                Don't have an account ? <a href="/signup"> Signup Now</a>
              </p>

              <p className="logo">
                <b className="text-2xl">logo</b>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
