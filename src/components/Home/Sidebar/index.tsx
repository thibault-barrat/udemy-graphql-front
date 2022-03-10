import React from "react";
import styles from "./Sidebar.module.scss";
import Filters from "../Filters";

const Sidebar = () => {
  const filters = ["Top", "Bottom", "Jacket"];
  const categories = ["Women", "Men", "Kids", "Accessories"];
  return (
    <div className={styles.sidebar}>
      <h6 className={styles.title}>Categories</h6>
      {categories.map((filter, index) => (
        <Filters.Category key={index} name={filter} />
      ))}
      <div className={styles.divider}></div>
      <h6 className={styles.title}>Filters</h6>
      {filters.map((filter, index) => (
        <Filters.Filter key={index} name={filter} />
      ))}
    </div>
  );
};

export default Sidebar;
