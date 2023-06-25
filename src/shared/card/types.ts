export interface CardData {
  id: string;
  cardLogo: string;
  cardTitle: string;
  cardRating: number;
  cardRatingCount: number;
  cardTags: string[];
  cardDetails: string[];
  cardCities: string[];
  homePage: string;
  location: {
    lat: number;
    lng: number;
  };
}
