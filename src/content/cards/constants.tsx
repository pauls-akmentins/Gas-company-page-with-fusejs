import { Option } from "./types";

import { CardData } from "../../shared/card/types";
import LNLogo from "../../assets/logos/ln-logo.png";
import BPLogo from "../../assets/logos/bp-logo.png";
import ViadaLogo from "../../assets/logos/viada-logo.jpeg";
import NesteLogo from "../../assets/logos/neste-logo.png";
import CircleKLogo from "../../assets/logos/circle-logo.png";
import KoolLogo from "../../assets/logos/kool-logo.png";

export const cardsData: CardData[] = [
  {
    id: "1",
    cardLogo: LNLogo,
    cardTitle: "Latvijas Nafta SIA",
    cardRating: 4.5,
    cardRatingCount: 46,
    cardTags: ["Degviela", "Uzkodas"],
    cardDetails: [
      "6 EUR centi par katru degvielas litru",
      "15% karstajiem dzērieniem",
      "10% smalkmaizītēm un sviestmaizēm",
    ],
    cardCities: ["Rīga", "Ogre", "Aizkraukle"],
    homePage: "http://www.lnafta.lv",
    location: {
      lat: 56.94965,
      lng: 24.105186,
    },
  },
  {
    id: "2",
    cardLogo: BPLogo,
    cardTitle: "BP SIA",
    cardRating: 4.8,
    cardRatingCount: 32,
    cardTags: ["Degviela", "Uzkodas", "Autogāze"],
    cardDetails: [
      "9 EUR centi par katru degvielas litru",
      "10% smalkmaizītēm un sviestmaizēm",
    ],
    cardCities: ["Rīga", "Ogre", "Liepāja", "Ventspils"],
    homePage: "http://www.bp.com",
    location: {
      lat: 56.511311,
      lng: 21.01119,
    },
  },
  {
    id: "3",
    cardLogo: ViadaLogo,
    cardTitle: "Viada SIA",
    cardRating: 4.2,
    cardRatingCount: 16,
    cardTags: ["Degviela", "Uzkodas"],
    cardDetails: [
      "8 EUR centi par katru degvielas litru",
      "50% karstajiem dzērieniem",
      "30% auto mazgātuvē",
    ],
    cardCities: ["Rīga", "Sigulda", "Daugavpils"],
    homePage: "http://www.viada.lv",
    location: {
      lat: 55.871849,
      lng: 26.51782,
    },
  },
  {
    id: "4",
    cardLogo: NesteLogo,
    cardTitle: "Neste WorldWide SIA",
    cardRating: 4.3,
    cardRatingCount: 22,
    cardTags: ["Degviela", "Uzkodas", "Autogāze"],
    cardDetails: [
      "8 EUR centi par katru degvielas litru",
      "50% auto mazgātuvē",
      "20% saldējumiem",
    ],
    cardCities: ["Rīga", "Salaspils", "Ikšķile"],
    homePage: "http://www.neste.lv",
    location: {
      lat: 56.852619,
      lng: 24.336321,
    },
  },
  {
    id: "5",
    cardLogo: CircleKLogo,
    cardTitle: "Circle K Europe SIA",
    cardRating: 5,
    cardRatingCount: 79,
    cardTags: ["Degviela", "Uzkodas", "Autogāze"],
    cardDetails: [
      "8 EUR centi par katru degvielas litru",
      "20% saldējumiem",
      "30% auto mazgātuvē",
    ],
    cardCities: [
      "Rīga",
      "Ogre",
      "Jēkabpils",
      "Daugavpils",
      "Sigulda",
      "Ventspils",
    ],
    homePage: "http://www.circlek.lv",
    location: {
      lat: 56.81741,
      lng: 24.6064,
    },
  },
  {
    id: "6",
    cardLogo: KoolLogo,
    cardTitle: "Kool DUS Latvija SIA",
    cardRating: 4,
    cardRatingCount: 23,
    cardTags: ["Degviela", "Uzkodas"],
    cardDetails: ["7 EUR centi par katru degvielas litru", "20% burgeriem"],
    cardCities: ["Rīga", "Ādaži", "Ainaži"],
    homePage: "http://www.kool.lv",
    location: {
      lat: 57.0874671,
      lng: 24.3195797,
    },
  },
];

export enum SearchKeys {
  CARD_TITLE = "cardTitle",
  CARD_CITIES = "cardCities",
  CARD_DETAILS = "cardDetails",
  CARD_TAGS = "cardTags",
}

export const cardCategoryOptions: Option[] = [
  {
    label: "Degviela",
    value: "Degviela",
  },
  {
    label: "Uzkodas",
    value: "Uzkodas",
  },
  {
    label: "Autogāze",
    value: "Autogāze",
  },
];

export const cardCityOptions: Option[] = [
  {
    value: "Rīga",
    label: "Rīga",
  },
  {
    value: "Ādaži",
    label: "Ādaži",
  },
  {
    value: "Ainaži",
    label: "Ainaži",
  },
  {
    value: "Ogre",
    label: "Ogre",
  },
  {
    value: "Jēkabpils",
    label: "Jēkabpils",
  },
  {
    value: "Daugavpils",
    label: "Daugavpils",
  },
  {
    value: "Ventspils",
    label: "Ventspils",
  },
  {
    value: "Ikšķile",
    label: "Ikšķile",
  },
  {
    value: "Liepāja",
    label: "Liepāja",
  },
  {
    value: "Aizkraukle",
    label: "Aizkraukle",
  },
  {
    value: "Sigulda",
    label: "Sigulda",
  },
];
