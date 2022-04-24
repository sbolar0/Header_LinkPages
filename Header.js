import React, { useState } from "react";
import styles from "../Styles/Components/HeaderFooter.module.css";
import HeaderDropdown from "./HeaderDropdown";
import HeaderDropdownUser from "./HeaderDropdownUser";

export default function Header() {
  //if dropdown is set to true you will see dropdown menu
  const [dropdown, setDropdown] = useState(true);

  //these two onMouse functions toggle the dropdown state so you see it when mouse is over div where dropdwon is located
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    // <div>
    <div className={styles.headerContainer}>
      {/* {sessionStorage.access_token && (
        <div className={styles.centerForm}>
          <b>Logged In</b>
        </div>
      )} */}

      {/* THIS IS WHERE WE CHECK TO SEE IF USER IS LOGGED IN */}
      {sessionStorage.access_token ? (
        <div>
          <div className={styles.left}>
            {/* <b>Logged In</b> */}
            <div
              className={styles.navitem}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              select options
              {/* if dropdown state is true make HeaderDropdown visible */}
              {dropdown && <HeaderDropdownUser />}
            </div>
          </div>
          </div>
      ) : (
        // NOT LOGGED IN
        <div>
          <div className={styles.left}>
            <div
              className={styles.navitem}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Select Options
              {/* if dropdown state is true make HeaderDropdown visible */}
              {dropdown && <HeaderDropdown />}
            </div>
          </div>
          {/* <div className={styles.centerForm}>Not Logged In</div> */}
        </div>
      )}
       <div className={styles.centerForm}>
            <input
              className={styles.inputField}
              type="text"
              name="stockSearch"
              placeholder="search for stock or cryptocurrency"
              // onChange={handleInputChange}
              // value={inputs.username || ""}
              // required
            ></input>
          </div>      

      <div className={styles.logoright}>
        <a href="#">
          <img
            className="right"
            src="/imgs/logo.png"
            height="60"
            width="60"
          ></img>
        </a>
      </div>
    </div>
  );
}
