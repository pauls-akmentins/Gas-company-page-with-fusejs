import { MultiValue } from "react-select";
import classNames from "classnames";

import styles from "./styles/SearchRow.module.scss";

import { useState } from "react";

import Input from "../../shared/input";
import Dropdown from "../../shared/dropdown";
import { Option } from "../../shared/dropdown/types";
import { cardCategoryOptions, cardCityOptions } from "../cards/constants";
import { StateNames } from "./types";

const SearchRow: React.FC<{
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ searchQuery, onSearchChange }) => {
  const [places, setPlaces] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const handleDropdownChange = (
    selectedOptions: MultiValue<Option>,
    stateName: StateNames
  ) => {
    const values = selectedOptions.map(({ value }) => value);
    if (stateName === StateNames.PLACES) {
      setPlaces(values);
    } else {
      setCategories(values);
    }
  };

  return (
    <>
      <div className={classNames(styles.searchRowContainer)}>
        <Input
          label="Meklēt"
          placeholder="Ko vēlies atrast?"
          id="main-search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e)}
        />
      </div>
      <div className={classNames(styles.searchRowContainer)}>
        <Dropdown
          options={cardCityOptions}
          label="Vieta"
          placeholder="Visas vietas"
          onChange={(selectedOptions) =>
            handleDropdownChange(selectedOptions, StateNames.PLACES)
          }
        />
      </div>
      <div className={classNames(styles.searchRowContainer)}>
        <Dropdown
          options={cardCategoryOptions}
          label="Kategorija"
          placeholder="Visas kategorijas"
          onChange={(selectedOptions) =>
            handleDropdownChange(selectedOptions, StateNames.CATEGORIES)
          }
        />
      </div>
    </>
  );
};

export default SearchRow;
