import classNames from "classnames";
import React from "react";
import styles from "./styles/MainContainer.module.css";

const MainContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={classNames(styles.mainContainer)}>{children}</div>;
};

export default MainContainer;
