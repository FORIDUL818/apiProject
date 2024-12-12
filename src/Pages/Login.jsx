import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Lottie from "lottie-react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckBox from "../Components/ChecBox";
import LoginGoogleBtn from "../Components/LoginGoogleBtn";
import RadioButton from "../Components/RadioButton";
import LogAny from "../animation/Animation - 1700026158721.json";
import FileUpload from "./Fileupload";

const Login = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  // eror section start
  let [emailerrormgs, setemailerrormgs] = useState("");
  let [passerrormgs, setpasserrormgs] = useState("");
  // eror section end

  //  regex start
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  let handleEmail = (e) => {
    setemail(e.target.value);
    setemailerrormgs("");
  };
  let handlePassword = (e) => {
    setpassword(e.target.value);
    setpasserrormgs("");
  };

  let handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (email == "") {
      setemailerrormgs("this is not correct");
    } else if (!email.match(emailRegex)) {
      setemailerrormgs("this is not email");
    }
    if (password == "") {
      setpasserrormgs("this is not password");
    } else if (!password.match(passwordRegex)) {
      setpasserrormgs("this is not password enaf");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          toast.success("successefull work");
          navigate("/registration/homeLaout/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  };
  let [showpassword, setshowpassword] = useState();
  let Toggole = () => {
    setshowpassword(!showpassword);
  };
  return (
    <div className=" container mx-auto h-screen  flex justify-between items-center  bg-gray-400">
      <ToastContainer />
      <Link className=" text-gray-400" to="/registration/homeLaout/home">
        home
      </Link>

      <div className=" w-[50%]  bg-slate-300 m-5">
        <div className="  bg-[#ffffff] p-5 flex justify-center items-center">
          {/* ragistration from start */}
          <form
            onSubmit={handleLogin}
            className=" bg-[#f2f2f4] w-[90%] h-[95%] p-2 "
          >
            <div className=" bg-indigo-600 text-[#fff] mb-5 p-2 text-[32px] text-center">
              <h1>Login Form</h1>
            </div>
            <h1 className=" mb-2">email</h1>
            <input
              type="text"
              onChange={handleEmail}
              placeholder=" enter your mail "
              className=" bg-white p-2 w-full rounded-md mb-2"
            />
            <h1 className=" text-[red] text-[14px] m- ">{emailerrormgs}</h1>
            <h1 className=" mb-2">password</h1>
            <div className=" relative">
           

              <input
                type={showpassword ? "text" : "password"}
                onChange={handlePassword}
                placeholder=" enter your password"
                className=" bg-white p-2  w-full rounded-md"
              />
            </div>
            <h1 className=" text-[red] text-[14px]">{passerrormgs}</h1>

            <div>
              <RadioButton />
            </div>
            <div className=" mt-3 p-3 bg-slate-300">
              <FileUpload />
            </div>
            <div className=" mb-2">
              <CheckBox />
            </div>
            <button className=" text-[24px] text-center  bg-slate-600 block w-full uppercase text-[#fff] hover:bg-indigo-700">
              submit
            </button>
            <Link
              to="/fogetPass"
              className=" text-[14px] block transform active: scale-[1.09] transition-[.4s] text-right w-full uppercase text-[#000] mt-3 hover:text-indigo-700"
            >
              Forget Password
            </Link>
            <div className=" flex mt-2">
              <p className=" mr-2">are you new</p>
              <Link
                className=" text-green-500 uppercase text-[18px]"
                to="/registration"
              >
                Ragistration
              </Link>
            </div>
          </form>

          <div className=" relative">
            <div className=" absolute bottom-[-240px]  left-[-340px] text-[blue]">
              <LoginGoogleBtn />
            </div>
          </div>
          {/* ragitration from end */}
        </div>
      </div>

      <div className=" w-[50%]">
        <Lottie animationData={LogAny} />
      </div>
    </div>
  );
};

export default Login;
