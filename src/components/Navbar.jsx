import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import logo from "../assets/logo.png";

const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/Products" },
];

const Navbar = () => {
  const { user, login } = useAuthContext();

  const [show, setShow] = useState(false);

  const handleLogoutClick = () => {
    const confirmLogout = alert("Logging out...!");
    login({
      isLoginned: false,
      email: "",
      password: "",
    });
  };
  return (
    <section className=" bg-cyan-900  ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-12 py-5 ">
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
          </div>
        )}
    </section>
  );
};

export default Navbar;
