import React from "react";
import styles from "../styles/Features.module.css";
import Feature from "../components/Feature";
import features from "../../data/features.js";

const Features = () => {
  return (
    <>
      <h2>Features</h2>
      <div className={styles.features}>
        {features.map((feature) => (
          <Feature
            number={feature.number}
            title={feature.title}
            desc={feature.desc}
            key={feature.number}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
