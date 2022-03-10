import React from "react";
import Sidebar from "./Sidebar";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
          <Sidebar />
          {/* Gallery */}
    </section>
  );
};

export default Home;
