import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import logo from "../assets/logo.png";

const navbarLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
];

const Navbar = () => {
  const { user, login } = useAuthContext();

  const [show, setShow] = useState(false);

  const handleLogoutClick = () => {
     alert("Logging out...!");
    login({
      isLoginned: false,
      email: "",
      password: "",
    });
  };
  return (
    <section className="navbar-bg mx-0  ">
      <div className="container-wrapper px-4 py-5   flex items-center justify-between  ">
        <div className=" ">
          <img src={logo} className="w-[70px]" alt="" />
        </div>

         
        <div className=" navlinks    md:flex  flex-col md:flex-row  hidden    gap-3 py-4 px-5">
          {navbarLinks.map(({ name, href }) => (
            <NavLink key={name} className="text-white" to={href}>
              {name}
            </NavLink>
          ))}
        </div>
 
        <div className=" md:block   hidden">
          {user.isLoginned && (
            <NavLink
              className="text-white"
              to="/login"
              onClick={handleLogoutClick}
            >
              Logout
            </NavLink>
          )}
        </div>

        <div className="   md:hidden">
          {show ? (
            <button
              className="text-4xl text-white cursor-pointer hover:text-[#04ABF7] transition-colors active:text-[#DDFCFD]"
              onClick={() => setShow(!show)}
            >
              ✘
            </button>
          ) : (
            <button
              className="text-4xl text-white cursor-pointer hover:text-[#04ABF7] transition-colors active:text-[#DDFCFD]"
              onClick={() => setShow(!show)}
            >
              ❖
            </button>
          )}
        </div>
      </div>

      
      {show && (
        <div className="navlinks   md:hidden  flex-col    flex    gap-3 py-4 px-5">
          {navbarLinks.map(({ name, href }) => (
            <NavLink key={name} className="text-white" to={href}>
              {name}
            </NavLink>
          ))}
          <div className=" md:hidden   ">
            {user.isLoginned && (
              <NavLink
                className="text-white"
                to="/login"
                onClick={handleLogoutClick}
              >
                Logout
              </NavLink>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
