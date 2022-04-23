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
      title: "Register",
      path: "/signup",
      cName: "dropdown-link",
    },
    {
      title: "About",
      path: "/about",
      cName: "dropdown-link",
    },
  ];

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
                onClick={() => setClick(false)}
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
