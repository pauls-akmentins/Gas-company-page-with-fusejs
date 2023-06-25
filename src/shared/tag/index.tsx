import classNames from "classnames";

import styles from "./styles/Tag.module.scss";

const Tag: React.FC<{ tag: string; tagSize?: "small" | "large" }> = ({
  tag,
  tagSize = "small",
}) => {
  return (
    <div
      className={classNames(
        styles.tagContainer,
        styles[`tagContainer-${tagSize}`]
      )}
    >
      {tag}
    </div>
  );
};

export default Tag;
