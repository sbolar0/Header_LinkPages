import React, { useState, useContext } from "react";
import styles from "../Styles/Components/HeaderFooter.module.css";
import HeaderDropdown from "./HeaderDropdown";
import HeaderDropdownUser from "./HeaderDropdownUser";
import { UserContext } from "../Hooks/UserContext";
import { TickerContext } from "../Hooks/TickerContext";

export default function Header() {
  // if dropdown is set to true you will see dropdown menu
  const [dropdown, setDropdown] = useState(false);
  const { loggedIn, setLogIn } = useContext(UserContext);
  const { tickerType, setTickerType } = useContext(TickerContext);

  // so you see it when mouse is over div where dropdwon is located
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onChangeValue = (event) => {
    setLogIn(true);
    setTickerType(event.target.value);
  };

  return (
    // <div>
    <div className={styles.headerContainer}>
      {/* THIS IS WHERE WE CHECK TO SEE IF USER IS LOGGED IN */}
      {loggedIn ? (
        <div>
          <div className={styles.left}>
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
          <div className={styles.centerForm}>
            <input
              className={styles.inputField}
              type="text"
              name="stockSearch"
              placeholder="search for stock"
            ></input>
            <div onChange={onChangeValue} className={styles.centerForm}>
              <input type="radio" value="Stock" name="tickerType" /> Stock
              <input type="radio" value="Crypto" name="tickerType" /> Crypto
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
