import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./styles/Card.module.scss";
import { CardData } from "./types";

import Rating from "../rating";
import Tag from "../tag";
import Button from "../button";
import { copies } from "../../copies/copies";

const Card: React.FC<CardData> = ({
  id,
  cardLogo,
  cardTitle,
  cardRating,
  cardTags,
  cardDetails,
  cardRatingCount,
}) => {
  const navigate = useNavigate();

  return (
    <div className={classNames(styles.cardContainer)}>
      <div className={classNames(styles.cardContainerContent)}>
        <div className={classNames(styles.cardLogoContainer)}>
          <img
            className={classNames(styles.cardLogo)}
            src={cardLogo}
            alt="card-logo"
          />
        </div>
        <div className={classNames(styles.cardTitleContainer)}>
          <p className={classNames(styles.cardTitle)}>{cardTitle}</p>
        </div>
        <div className={classNames(styles.cardRatingContainer)}>
          <Rating rating={cardRating} ratingCount={cardRatingCount} />
        </div>
        <div className={classNames(styles.cardTagsContainer)}>
          {cardTags.map((cardTag) => (
            <Tag key={`${id}-${cardTag}`} tag={cardTag} />
          ))}
        </div>
        <div className={classNames(styles.cardDetailsContainer)}>
          {cardDetails.map((cardDetail) => (
            <p
              key={`${id}-${cardDetail}`}
              className={classNames(styles.cardDetail)}
            >
              {cardDetail}
            </p>
          ))}
        </div>
      </div>
      <div className={classNames(styles.cardActionContainer)}>
        <Button onClick={() => navigate(`/cards/${id}`)}>
          {copies.readMore}
        </Button>
      </div>
    </div>
  );
};

export default Card;
