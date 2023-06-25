import React from "react";
import classNames from "classnames";
import styles from "./styles/Grid.module.scss";

const Grid: React.FC<{ children: React.ReactNode; wrap?: boolean }> = ({
  children,
  wrap = false,
}) => {
  return (
    <div
      className={classNames(styles.gridContainer, {
        [styles.wrappedGrid]: wrap,
      })}
    >
      {children}
    </div>
  );
};

export default Grid;
