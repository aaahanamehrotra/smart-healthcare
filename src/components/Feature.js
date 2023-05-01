import React from "react";
import styles from "../styles/Feature.module.css";

const Feature = ({ number, title, desc }) => {
  console.log("J");
  return (
    <div className={styles.feature}>
      <div className={styles.number}>{number}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default Feature;
