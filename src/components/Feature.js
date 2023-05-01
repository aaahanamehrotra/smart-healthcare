import React from "react";
import styles from "../styles/Feature.module.css";

const Feature = ({ number, title, desc }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.number}>{number}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default Feature;
