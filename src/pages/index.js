import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Lorem Ipsum</h1>
      <hr />
      <h3 className={styles.tagline}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vero
        nemo, illum deserunt laboriosam saepe fugit.
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
  );
}
