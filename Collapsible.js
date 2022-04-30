import React, { useState, useContext } from "react";
import styles from "../Styles/Pages/About.module.css";

export default function Collapsible(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapsible">
      <button className={styles.btn} onClick={() => setOpen(!open)}>
        {props.label}
      </button>
      {open && (
        <div className={styles.collapsibleContent}>{props.children}</div>
      )}
    </div>
  );
}
