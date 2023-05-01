import React from "react";
import styles from "../styles/About.module.css";
import Feature from "../components/Feature";
import features from "../../data/features.js";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className={styles.box}>
        <h2>The Problem</h2>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          molestias quos ipsam nulla quibusdam vero voluptatibus vel quae quam
          officiis ipsum optio eaque, perferendis exercitationem hic quia ut?
          Necessitatibus similique hic est natus nulla harum praesentium aut
          temporibus sint voluptas, quasi repudiandae deserunt numquam saepe!
          Esse suscipit eos possimus, velit dolore inventore neque
          exercitationem perferendis fugiat tempora quae ducimus ex maiores
          debitis, ipsa blanditiis!
        </div>
      </div>
      <div className={styles.box}>
        <h2>The Solution</h2>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          molestias quos ipsam nulla quibusdam vero voluptatibus vel quae quam
          officiis ipsum optio eaque, perferendis exercitationem hic quia ut?
          Necessitatibus similique hic est natus nulla harum praesentium aut
          temporibus sint voluptas, quasi repudiandae deserunt numquam saepe!
          Esse suscipit eos possimus, velit dolore inventore neque
          exercitationem perferendis fugiat tempora quae ducimus ex maiores
          debitis, ipsa blanditiis!
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
