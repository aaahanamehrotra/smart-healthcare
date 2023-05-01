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
          A well-grounded and refined version of biological lungs, a combination of external artificial respiratory system and a genetically engineered one. This product is a perfect substitute to lung failure and is the only alternative and viable solution to this problem. 
We are also providing a service of analysing and visualising huge amounts of COVID-19 data using attractive graphics. 
Through this, we can state that we have a three fold purpose/aim. 
One is device, two model and prediction and three data visualisation.ML prediction. We will have a broader scope.
Secondly, to develop a model that analyses CT scans and X Rays and predicts if the infected patients show signs of pneumonia. 
And thirdly, to analyze and visually present large amounts of COVID-19 data using appealing graphics. With these objectives, we aim to have a wide-ranging impact.


        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
