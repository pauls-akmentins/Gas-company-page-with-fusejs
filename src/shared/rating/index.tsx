import classNames from "classnames";

import styles from "./styles/Rating.module.scss";
import MUIRating from "@mui/material/Rating";

import { RatingData } from "./types";

const Rating: React.FC<RatingData> = ({
  rating,
  ratingCount,
  ratingSize = "small",
}) => {
  return (
    <div className={classNames(styles.ratingContainer)}>
      <MUIRating
        name="cardRating"
        value={rating}
        precision={0.5}
        size={ratingSize}
        readOnly
      />
      <p
        className={classNames(styles.ratingCount, {
          [styles.largeRating]: ratingSize === "large",
        })}
      >
        {ratingCount}
      </p>
    </div>
  );
};

export default Rating;
