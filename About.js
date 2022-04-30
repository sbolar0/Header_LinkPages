import React, { useState, useContext } from "react";

import styles from "../Styles/Pages/About.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Collapsible from "../Components/Collapsible";

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <div className={styles.collapsibleContainer}>
          <div>
            <Collapsible label="Cameron">
              <p>Cameron's Bio</p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Mark">
              <p>Mark's Bio</p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Rita">
              <p>Rita's Bio</p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Ryan">
              <p>Ryan's Bio</p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Supreetha">
              <p>Supreetha's Bio</p>
            </Collapsible>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
