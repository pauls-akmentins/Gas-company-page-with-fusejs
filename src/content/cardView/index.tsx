import { useState } from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";

import styles from "./styles/CardView.module.scss";

import { cardsData } from "../cards/constants";
import MainContainer from "../../shared/layout/mainContainer";
import Rating from "../../shared/rating";
import Tag from "../../shared/tag";
import { copies } from "../../copies/copies";
import Button from "../../shared/button";
import Map from "../../shared/map";

const CardView: React.FC = () => {
  const { cardId } = useParams<{ cardId: string }>();
  const [formFeedback, setFormFeedback] = useState<string>("");
  const currentCard = cardsData.find(({ id }) => id === cardId);

  const handleFormSubmit = () => {
    if (formFeedback !== "") {
      alert(copies.feedback);
      setFormFeedback("");
    }
  };

  return (
    <MainContainer>
      <div className={classNames(styles.cardContainer)}>
        <div className={classNames(styles.cardInnerContainer)}>
          <div className={classNames(styles.cardLogoContainer)}>
            <img
              className={classNames(styles.cardLogo)}
              src={currentCard?.cardLogo}
              alt="card-logo"
            />
            <div className={classNames(styles.cardTitleContainer)}>
              <p className={classNames(styles.cardTitle)}>
                {currentCard?.cardTitle}
              </p>
            </div>
            <div className={classNames(styles.cardRatingContainer)}>
              <Rating
                ratingSize="large"
                rating={currentCard?.cardRating || 0}
                ratingCount={currentCard?.cardRatingCount || 0}
              />
            </div>
            <div className={classNames(styles.cardHomePage)}>
              <a href={currentCard?.homePage} target="_blank" rel="noreferrer">
                {currentCard?.homePage.slice(7)}
              </a>
            </div>
          </div>
          <div className={classNames(styles.cardContainerContent)}>
            <div className={classNames(styles.cardDetailsContainer)}>
              {currentCard?.cardDetails.map((cardDetail) => (
                <p
                  key={`${currentCard?.id}-${cardDetail}`}
                  className={classNames(styles.cardDetail)}
                >
                  {cardDetail}
                </p>
              ))}
            </div>
            <div className={classNames(styles.cardTagsContainer)}>
              {currentCard?.cardTags.map((cardTag) => (
                <Tag
                  tagSize="large"
                  key={`${currentCard?.id}-${cardTag}`}
                  tag={cardTag}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={classNames(styles.cardMapContainer)}>
          <Map
            latitude={currentCard?.location.lat || 0}
            longitude={currentCard?.location.lng || 0}
          />
        </div>
        <div className={classNames(styles.cardFormContainer)}>
          <form>
            <div className={classNames(styles.cardInnerForm)}>
              <p className={classNames(styles.cardFormTitle)}>
                {copies.formTitle}
              </p>
              <TextField
                multiline
                placeholder="Atsauksmes"
                value={formFeedback}
                onChange={(e) => setFormFeedback(e.target.value)}
                fullWidth
              />
              <Button onClick={handleFormSubmit}>{copies.send}</Button>
            </div>
          </form>
        </div>
      </div>
    </MainContainer>
  );
};

export default CardView;
