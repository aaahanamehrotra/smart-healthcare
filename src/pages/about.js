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
          The COVID-19 virus has unique features that make it difficult to diagnose and control its spread. 
While PCR is the primary method of diagnosis, CT scans and chest X-rays can also show signs of pneumonia in infected patients. 
It is crucial to accurately identify infected patients to prevent further spread of the virus and avoid unnecessary quarantine.
To prevent overburdening the healthcare system and avoid unnecessary quarantine, it is necessary to have a low rate of false positives. 
This means to correctly identify individuals who are not infected with COVID-19 so as to avoid unnecessary measures such as quarantine.


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
