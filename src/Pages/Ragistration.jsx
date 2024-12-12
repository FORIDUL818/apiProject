import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Lottie from "lottie-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckBox from "../Components/ChecBox";
import Googlesinge from "../Components/Googlesinge";
import RadioButton from "../Components/RadioButton";
import RejAny from "../animation/Animation - 1700021405009.json";
import FileUpload from "./Fileupload";

const Ragistration = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  // const history = useHistory()
  // useState aria start
  let [fname, setfname] = useState("");
  let [lname, setlname] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setemil] = useState("");
  let [password, setpassword] = useState("");
  let [repassword, setrepassword] = useState("");

  // error section start
  let [fnameerrormgs, setfnameerrormgs] = useState("");
  let [lnameerrormgs, setlnameerror] = useState("");
  let [emailerrorMgs, setemailerrorMgs] = useState();
  let [phoneerrormgs, setphoneerror] = useState("");
  let [passerrormgs, setpasserror] = useState("");
  let [repasserrormgs, setrepasserror] = useState("");
  let [showpassword, setshowpassword] = useState(false);
  let [reshowpassword, setreshowpassword] = useState(false);

  let Toggole = () => {
    setshowpassword(!showpassword);
  };
  let Toggole2 = () => {
    setreshowpassword(!reshowpassword);
  };
  // error section end

  // useState aria end

  // function aria start

  let handelFname = (e) => {
    setfname(e.target.value);
    setfnameerrormgs("");
  };
  let handleLastname = (e) => {
    setlname(e.target.value);
    setlnameerror("");
  };
  let handlePhone = (e) => {
    setPhone(e.target.value);
    setphoneerror("");
  };
  let handleEmail = (e) => {
    setemil(e.target.value);
    setemailerrorMgs("");
  };
  let handlePassword = (e) => {
    setpassword(e.target.value);
    setpasserror("");
  };
  let handelrepassword = (e) => {
    setrepassword(e.target.value);
    setrepasserror("");
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  const phoneRegex = /^(\+\d{1,2}\s?)?(\d{3,4}[-.])?\d{7,}$/;

  let handleRagistration = (e) => {
    e.preventDefault();
    setfname(e.target.value);

    if (fname == "") {
      setfnameerrormgs("this not correct frast name");
    }
    if (phone == "") {
      setphoneerror("this is not correct phone");
    } else if (!phone.match(phoneRegex)) {
      setphoneerror("this is not a phone number");
    }
    if (lname == "") {
      setlnameerror("this is not corret last name");
    }
    if (email == "") {
      setemailerrorMgs("this is not correct email");
    } else if (!email.match(emailRegex)) {
      setemailerrorMgs("this is not correct");
    }
    if (password == "") {
      setpasserror("this is not correct password");
    } else if (!password.match(passwordRegex)) {
      setpasserror("this is not enef pass");
    }
    if (repassword == "") {
      setrepasserror("this is not correct password");
    } else if (!repassword.match(passwordRegex)) {
      setrepasserror("this is not enef pass");
    }
    if (password !== repassword) {
      setpasserror("this is not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          toast.success("successefull work");
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          toast.error("rong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }),
            console.log("code", errorCode);
          console.log("magassege", errorMessage);

          if (errorCode == "auth/email-already-in-use") {
            setemailerrorMgs("this is email already in use try anothere");
          }
          // ..
        });
    }
  };

  // function aria end

  return (
    <div className=" container mx-auto bg-slate-300 h-screen flex justify-center items-center">
      <div className=" w-[35%] bg-[#fffffd] p-5 flex justify-center items-center mr-10">
        {/* ragistration from start */}
        <form
          onSubmit={handleRagistration}
          className=" bg-[#f2f2f4] w-[90%]  p-2"
        >
          <div className=" bg-indigo-600 text-[#fff] mb-5 p-5 text-[32px] text-center">
            <h1>Ragistration Form</h1>
          </div>
          <h1 className=" mb-2 uppercase "> Frist name</h1>
          <input
            type="text"
            onChange={handelFname}
            placeholder=" Enter your Frist name "
            className=" bg-white p-2 w-full rounded-md mb-2"
          />
          <h1 className=" text-red-600 text-[14px]  "> {fnameerrormgs} </h1>
          <h1 className=" mb-2 uppercase ">Last name</h1>
          <input
            type="text"
            onChange={handleLastname}
            placeholder=" Enter your Last name "
            className=" bg-white p-2 w-full rounded-md mb-2"
          />
          <h1 className=" text-red-600 text-[14px]">{lnameerrormgs}</h1>
          <h1 className=" mb-2 uppercase ">Phone</h1>
          <input
            type="number"
            onChange={handlePhone}
            placeholder=" enter your phone"
            className=" bg-white p-2 w-full rounded-md mb-2"
          />
          <h1 className=" text-red-600 text-[14px]"> {phoneerrormgs} </h1>
          <h1 className=" mb-2 uppercase ">email</h1>
          <input
            type="email"
            onChange={handleEmail}
            placeholder=" enter your mail "
            className=" bg-white p-2 w-full rounded-md mb-2"
          />
          <h1 className=" text-red-600 text-[14px]  "> {emailerrorMgs} </h1>
          <h1 className=" mb-2 uppercase ">password</h1>
          <div className=" relative">
       
            <input
              type={showpassword ? "text" : "password"}
              onChange={handlePassword}
              placeholder=" enter your password"
              className=" bg-white p-2 w-full rounded-md mb-2"
            />
          </div>
          <h1 className=" text-red-600 text-[14px] ">{passerrormgs}</h1>
          <div className=" relative">
         
            <input
              type={reshowpassword ? "text" : "password"}
              onChange={handelrepassword}
              placeholder=" enter your repassword"
              className=" bg-white p-2 w-full rounded-md mb-4"
            />
          </div>
          <h1 className="text-red-600 text-[14px]"> {repasserrormgs}</h1>

          <div className=" mb-3">
            <RadioButton />
          </div>
          <div className=" bg-slate-400 p-4">
            <FileUpload className=" mt-3 p-3 bg-slate-300" />
          </div>
          <div className="mb-3 mt-2">
            <CheckBox />
          </div>
          <button className=" text-[24px] text-center transform active: scale-[1.09] transition-[.4s]  bg-slate-600 block w-full uppercase text-[#fff] hover:bg-indigo-700">
            submit
          </button>

          <div className=" flex mt-2">
            <h1 className=" mr-3">are you have an account</h1>
            <Link
              className=" mr-2 uppercase text-[18px] text-[blue]"
              to="/login"
            >
              login
            </Link>
          </div>
        </form>
        <div className=" relative">
          <div className=" absolute bottom-[-400px]  left-[-170px] text-[blue]">
            <Googlesinge />
          </div>
        </div>
        {/* ragitration from end */}
      </div>

      <div>
        <Link
          to="/registration/homeLaout/home"
          className=" text-[24px] text-center transform active: scale-[1.09] transition-[.4s]  bg-slate-600 block w-full uppercase text-[#fff] hover:bg-indigo-700"
        >
          click
        </Link>
        <Lottie animationData={RejAny} />
      </div>
    </div>
  );
};

export default Ragistration;
