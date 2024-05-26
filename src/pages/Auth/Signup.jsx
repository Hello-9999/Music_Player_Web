import React, { useEffect, useState } from "react";
import { Signup_Auth } from "../../services/Authentication";

const Signup = ({}) => {
  const [form_index, setform_index] = useState(0);
  const [User_details, setUser_details] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [letter_pass_status, setletter_pass_status] = useState(false);
  const [numSp_pass_status, setnumSp_status] = useState(false);
  const [char_pass_status, setchar_pass_status] = useState(false);

  // console.log()

  const Signup_Steeper = [
    {
      id: "email",
      header: "Sign up to start listening",
      label: "Email address",
      placeholder: "name@domain.com",
      inputType: "email",
      p: "",
    },
    {
      id: "password",
      header: "Create a password ",
      title: "Password      ",
      placeholder: "",
      inputType: "password",
      p: "",
    },
    {
      id: "name",
      header: "Tell us about yourself  ",
      title: "Name      ",
      p: "This name will appear on your profile      ",
      placeholder: "",
      inputType: "text",
    },
  ];
  const handler_form = (e) => {
    e.preventDefault();
    const Steper_Count = document.getElementById("Count_steeper");
    const Back = document.getElementById("back_btn");

    if (form_index <= 3) {
      setform_index(form_index + 1);
    }
    if (form_index >= 0) {
      Steper_Count.classList.add("block");
      Steper_Count.classList.remove("hidden");
    }
    if (form_index >= 0) {
      Back.classList.remove("hidden");
      Back.classList.add("block");
    }
  };
  const handler_Back = (e) => {
    e.preventDefault();
    console.log(Signup_Steeper[form_index].id);

    if (form_index > 0) {
      setform_index(form_index - 1);
    }
  };
  if (form_index === 0) {
    const Back = document.getElementById("back_btn");
    if (!Back === null) {
      Back.classList.remove("block");
      Back.classList.add("hidden");
    }
  }
  const form_handler = async (e) => {
    e.preventDefault();
    const UserDetails = {
      Email: User_details.email,
      password: User_details.password,
      Name: User_details.name,
    };
    const user_Email = User_details.email;
    const user_Password = User_details.password;

    const response = await Signup_Auth(user_Email, user_Password);
    console.log(response.user.auth._currentUser, "re");

    console.log(UserDetails, "detaa");
  };

  const handler_input = (e) => {
    const regex = /([A-z])/g;
    const num_regex = /([0-9])/g;
    const special_Char = /([$&+,:;=?@#|'<>.^*()%!-])/g;
    const password_Valid = document.getElementById("password_validation");
    const password_letter = document.getElementById("pass_letter");
    const password_number_char = document.getElementById("pass_num_sp");
    const password_charcter = document.getElementById("pass_char");
    const id = e.target.id;
    const value = e.target.value;
    const copy_User_details = { ...User_details };
    copy_User_details[id] = value;

    if (id === "password") {
      password_Valid.classList.add("block");
      password_Valid.classList.remove("hidden");
      if (regex.test(value)) {
        setletter_pass_status(true);
        password_letter.classList.add("text-green-500");
        password_letter.classList.remove("text-red-500");
      } else {
        setletter_pass_status(false);
        password_letter.classList.remove("text-green-500");
        password_letter.classList.add("text-red-500");
      }
      if (num_regex.test(value) || special_Char.test(value)) {
        setnumSp_status(true);
        password_number_char.classList.add("text-green-500");
        password_number_char.classList.remove("text-red-500");
      } else {
        setnumSp_status(false);
        password_number_char.classList.remove("text-green-500");
        password_number_char.classList.add("text-red-500");
      }
      if (value.length >= 10) {
        setchar_pass_status(true);
        password_charcter.classList.add("text-green-500");
        password_charcter.classList.remove("text-red-500");
      } else {
        setchar_pass_status(false);
        password_charcter.classList.remove("text-green-500");
        password_charcter.classList.add("text-red-500");
      }
    } else {
      password_Valid.classList.add("hidden");
      password_Valid.classList.remove("block");
    }
    setUser_details(copy_User_details);
  };


  return (
    <div className="signup_container">
      <div className="signup_body md:flex h-screen">
        <div className="signup_image hidden md:block  bg-slate-400 md:w-3/5 ">
          <img
            src="https://images.kataeb.org/new-website/Mix/music.jpeg"
            alt=""
            width="100%"
            height="100vh"
          />
        </div>

        <div className="signup_form rounded-md  w-full   p-3 md:p-9 md:w-2/4 ">
          <div className="logo p-0 h-4">
            <h4>Logo</h4>
          </div>

          <form action="" className=" mt-10" onSubmit={handler_form}>
            <div className="form_container mt-6 w-full">
              <div className="back hidden" id="back_btn">
                {form_index > 0 ? (
                  <button className=" hover:border-none" onClick={handler_Back}>
                    {" "}
                    Back
                  </button>
                ) : (
                  <></>
                )}
              </div>
              <div className="user_form mt-4" id="form_handler">
                <div
                  className={`   ${
                    Signup_Steeper[form_index].id === "email"
                      ? "form_title hidden"
                      : "form_title block"
                  } `}
                  id="Count_steeper"
                >
                  <h2 className="text-xl font-semibold text-gray-500 ">{`Step ${
                    form_index + 1
                  } of 3`}</h2>
                </div>
                <h5 className=" text-xl font-bold mb-6">
                  {Signup_Steeper[form_index].header}
                </h5>
                <label
                  htmlFor="email"
                  className="text-sm  md:text-lg font-medium leading-6 text-gray-200 "
                >
                  {Signup_Steeper[form_index].label}
                </label>
                <p className="text-sm text-gray-400">
                  {Signup_Steeper[form_index].p}
                </p>
                <input
                  required
                  id={Signup_Steeper[form_index].id}
                  type={Signup_Steeper[form_index].inputType}
                  placeholder={Signup_Steeper[form_index].placeholder}
                  className="rounded-md border-0 \text-gray-900 p-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full mt-3 text-lg"
                  onChange={handler_input}
                  value={User_details[Signup_Steeper[form_index].id] || ""}
                />
              </div>

              <div
                className={`${
                  Signup_Steeper[form_index].id === "password"
                    ? "password_validation block"
                    : "password_validation hidden"
                }`}
                id="password_validation"
              >
                <h5 className="mt-4 sm:text-lg md:text-xl">
                  Your password must contain at least
                </h5>
                <div className="list">
                  <ul>
                    <li className="letter text-red-500" id="pass_letter">
                      1 letter
                    </li>
                    <li className="number text-red-500" id="pass_num_sp">
                      1 number or special character (example: # ? ! &){" "}
                    </li>
                    <li className="char text-red-500" id="pass_char">
                      10 characters
                    </li>
                  </ul>
                </div>
              </div>

              {form_index === Signup_Steeper.length - 1 ? (
                <button
                  className="bg-blue-600 w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11"
                  onClick={form_handler}
                  type="submit"
                >
                  Sign Up
                </button>
              ) : Signup_Steeper[form_index].id === "password" ? (
                <>
                  <button
                    className={
                      numSp_pass_status &&
                      letter_pass_status &&
                      char_pass_status
                        ? "bg-blue-600 w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11"
                        : "bg-stone-900 w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11 hover:cursor-help"
                    }
                    type="submit"
                    disabled={
                      !numSp_pass_status &&
                      !letter_pass_status &&
                      !char_pass_status
                    }
                  >
                    {numSp_pass_status && letter_pass_status && char_pass_status
                      ? "Next"
                      : "loader"}
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-600 w-full md:w-3/4 mt-4 border-none focus:bg-blue-500 text-center md:mx-11"
                    type="submit"
                  >
                    {" "}
                    Next
                  </button>
                </>
              )}
            </div>
          </form>

          <hr className="mt-5 text-gray-500" />

          <div className="withgoogle mt-4">
            <button
              className="bg-gray-900 w-full md:w-3/4 md:mx-11"
              style={{ backgroundColor: "#131314" }}
            >
              Sign up with Google
            </button>
          </div>

          <p className="not_account mt-5 text-center ">
            Already have an account ?<a href="/"> Login here</a>
          </p>

          <p className="logo">
            <b className="text-2xl">logo</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
