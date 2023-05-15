import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.heading}>Pulmo-Gen</h1>
        <hr />
        <h3 className={styles.tagline}>
          It wasnt an invention supposed to be <br />A way to revolutionize our
          existence
        </h3>
        <div className={styles.buttons}>
          <Link href={"/features"}>
            <button className={styles.mainbtn}>Features</button>
          </Link>
          <Link href={"/about"}>
            <button className={styles.secondbtn}>About Us</button>
          </Link>
        </div>
      </div>
      <div className={styles.vm}>
        <div className={styles.box}>
          <h1>Our Mission</h1>
          <div className={styles.text}>
            To develop a product which can solve serious respiratory illnesses
            and increase the accuracy rate for detection
          </div>
        </div>
        <div className={styles.box}>
          <h1>Our Vision</h1>
          <div className={styles.text}>
            To reach out to help the maximum population and make it cost
            effective thereby, available to all
          </div>
        </div>
      </div>
    </>
  );
}
