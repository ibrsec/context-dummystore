import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const {login} = useAuthContext();

// const navigate = useNavigate();
// const location = useLocation(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (email === "admin@aa.com" && password === "xxxadminxxx") {
      //login();
      login({
        isLoginned:true,
        email:email,
        password:password
      }); 
    } else {
      alert("Invalid email or password!!!");
      setEmail("")
      setPassword("")
    }
  };

  const handleDoubleClick = (e) => {
    if (e.target.type === "email") {
      setEmail("admin@aa.com");
    }else if(e.target.type === "password"){
        setPassword("xxxadminxxx")
    }
  };
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center gap-4">
        <div className="flex  items-center mt-2 gap-4 justify-center    ">
          <span className="w-[6px] h-[39px] bg-main"></span>
          <h4 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase ">
            Serenty Store
          </h4>
        </div>
        <div className="my-2">
          <h3 className=" font-montserrat font-[600] text-[22px] ">SIGN IN</h3>
          <p className="font-montserrat text-labelColor text-label mt-1">
            Enter your credential to access your account
          </p>
        </div>
        <form
          className="flex flex-col text-start gap-5     "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="email"
              className=" font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin@aa.com'] hover:after:text-black hover:after:pl-3 hover:after:underline"
            >
              Email
            </label>
            <input
              className="loginInput"
              type="email"
              placeholder="Enter your email | double click to fill"
              name=""
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onDoubleClick={handleDoubleClick}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="password"
              className=" font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['xxxadminxxx'] hover:after:text-black hover:after:pl-3 hover:after:underline"
            >
              Password
            </label>
            <input
              className="loginInput"
              type="password"
              placeholder="******* | double click to fill"
              name=""
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onDoubleClick={handleDoubleClick}
            />
          </div>

          <button
            type="submit"
            className=" font-montserrat uppercase bg-main h-[44px] text-label text-white hover:opacity-90 rounded-[4px]"
          >
            SIGN IN
          </button>
          {/* //buttonlarin default typi submttir, iki butotn olsaydi ikiside submit gibi calismaya calisacakti - ozaman typei belirtmek gerekli */}
        </form>
        <p className="flex items-center justify-center gap-1 flex-wrap text-nowrap">
          <span className="text-label text-labelColor font-montserrat font-[400]">
            Forgot your password
          </span>
          <span className="text-main text-[14px] font-montserrat font-[600] underline">
            Reset password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
