import React from "react";
import styles from "../styles/Feature.module.css";

const Feature = ({ number, title, desc }) => {
  return (
    <div className={styles.feature}>

      <h2 className={styles.title}>{title}</h2>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default Feature;
