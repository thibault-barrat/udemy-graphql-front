import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        &copy; Copyright {new Date().getFullYear()} - All Rights Reserved
      </small>{" "}
    </footer>
  );
};

export default Footer;
