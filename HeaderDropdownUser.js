import React, { useState } from "react";
import "../Styles/Components/HeaderDropdown.css";
import { Link } from "react-router-dom";

function HeaderDropdown() {
  const MenuItems = [
    {
      title: "Main Page",
      path: "/",
      cName: "dropdown-link",
    },
    {
      title: "About",
      path: "/about",
      cName: "dropdown-link",
    },
    {
      title: "User Details",
      path: "/home",
      cName: "dropdown-link",
    },
    {
      title: "LogOut",
      path: "/logout",
      cName: "dropdown-link",
    },
  ];

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const checkPath = (path) => {
    if (path === "/logout") {
      fetch("http://127.0.0.1:5000/logout")
        .then((response) => response.json())
        .then((response) => {
          if (response["error"]) {
            console.log(response["error"]);
          } else {
            window.location.pathname = "/about";
          }
        })
        .catch((error) => console.log("Fetch error"));
      sessionStorage.setItem("access_token", "");
    }
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => {
                  checkPath(item.path);
                  setClick(false);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HeaderDropdown;
