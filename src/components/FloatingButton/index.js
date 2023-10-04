import React from "react";
import { Link } from "react-router-dom";
import styles from "./FloatingButton.module.css";

const FloatingButton = ({ label, color, to }) => {
  return (
    <Link to={to} className={styles.button} style={{ backgroundColor: color }}>
      {label}
    </Link>
  );
};

export default FloatingButton;
