import React, { useEffect, useState } from "react";
import styles from "../Styles/Components/HeaderFooter.module.css";
import HeaderDropdown from "./HeaderDropdown";

export default function Header() {
  //if dropdown is set to true  will see dropdown menu
  const [dropdown, setDropdown] = useState(true);

  //these two onMouse functions toggle the dropdown state so you see it when mouse is over div where dropdwon is located
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.navitem}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.selectoptionsheader}>
        Select Options
        </div>
        {/* if dropdown state is true make HeaderDropdown visible */}
        {dropdown && <HeaderDropdown />}
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
        {/* <div className={styles.right}><a href="#"><img className="right"src="/imgs/logo.png" height="60" width="60"></img></a></div> */}
      </div>
      <div className={styles.centerForm}>   
      <div class="search">          
        <input          
          className={styles.inputField}
          //square box
          // class="searchTerm"
          type="text"
          name="stockSearch"
          placeholder="Search for stock or crypto by ticker"
          // onChange={handleInputChange}
          // value={inputs.username || ""}
          // required
        ></input>
        </div> 
      </div>
    </div>
  );
}
