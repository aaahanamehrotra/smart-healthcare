import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="home">
        <Link href="/">Lorem</Link>
      </div>
      <div className={styles.buttons}>
        <Link href={"/features"}>
          <button className={styles.mainbtn}>Features</button>
        </Link>
        <Link href={"/about"}>
          <button className={styles.secondbtn}>About Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
