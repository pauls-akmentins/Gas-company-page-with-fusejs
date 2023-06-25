import Card from "../../shared/card";
import { CardData } from "../../shared/card/types";

const Cards: React.FC<{ cardsData?: CardData[] }> = ({ cardsData }) => {
  return (
    <>
      {cardsData?.map((cardData) => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </>
  );
};

export default Cards;
