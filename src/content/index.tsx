import { useEffect, useState, useMemo } from "react";
import classNames from "classnames";
import Fuse from "fuse.js";

import SearchRow from "./searchRow";
import Cards from "./cards";
import styles from "./styles/Content.module.scss";

import Grid from "../shared/layout/grid";
import MainContainer from "../shared/layout/mainContainer";
import { CardData } from "../shared/card/types";
import { cardsData, SearchKeys } from "./cards/constants";

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CardData[]>(cardsData);

  const fuse = useMemo(
    () =>
      new Fuse(cardsData, {
        keys: Object.values(SearchKeys),
        minMatchCharLength: 1,
        includeMatches: true,
        threshold: 0.2,
        ignoreLocation: true,
        findAllMatches: true,
        includeScore: true,
      }),
    []
  );

  useEffect(() => {
    const splitSearchQuery = searchQuery.split(" ");
    for (let i = 0; i < splitSearchQuery.length; i += 1) {
      const results = fuse.search(splitSearchQuery[i]);
      setSearchResults(searchQuery ? results.map((result) => result.item) : cardsData);
    }
  }, [searchQuery, fuse]);

  /** START: Manual search without fuse library */

  // const [filteredCardsData, setFilteredCardsData] =
  // useState<CardData[]>(cardsData);

  // const getSearchedCardsData = useCallback(() => {
  //   if (!searchQuery) {
  //     setFilteredCardsData(cardsData);
  //     return;
  //   }

  //   return setFilteredCardsData(
  //     cardsData.filter((cardData) => {
  //       const concatCardArbitraryText =
  //         `${cardData.cardTitle} ${cardData.cardCities} ${cardData.cardDetails} ${cardData.cardTags}`.toLowerCase();
  //       return concatCardArbitraryText.includes(searchQuery.toLowerCase());
  //     })
  //   );
  // }, [searchQuery]);

  // useEffect(() => {
  //   getSearchedCardsData();
  // }, [getSearchedCardsData, searchQuery]);

  /** END: Manual search without fuse library */

  return (
    <MainContainer>
      <div className={classNames(styles.topBanner)}>Atlaižu katalogs</div>
      <Grid>
        <SearchRow
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
        />
      </Grid>
      <Grid wrap>
        <Cards cardsData={searchResults} />
      </Grid>
    </MainContainer>
  );
};

export default Main;
