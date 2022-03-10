import React, { ChangeEventHandler, FormEvent, ReactEventHandler } from "react";
import styles from "./Filters.module.scss";

type Props = {
  name: string;
};

const Filters = {
  Category: ({ name }: Props) => {
    const handleChange = (e: FormEvent<HTMLInputElement>) => {};
    return (
      <div className={styles.filter}>
        <input
          type="radio"
          onChange={handleChange}
          name="category"
          value={name}
          className={styles.input}
          id={name}
          checked={false}
        />
        &nbsp;
        <label className={styles.label} htmlFor={name}>
          {name}
        </label>
      </div>
    );
  },
  Filter: ({ name }: Props) => {
    return (
      <div className={styles.filter}>
        <input
          name={name}
          onChange={() => {}}
          type="checkbox"
          className={styles.input}
          id={name}
        />
        &nbsp;
        <label className={styles.label} htmlFor={name}>
          {name}
        </label>
      </div>
    );
  },
};

export default Filters;
