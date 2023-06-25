import classNames from "classnames";
import Select, { MultiValue } from "react-select";

import { Option } from "./types";
import styles from "./styles/Dropdown.module.scss";

const Dropdown: React.FC<{
  options: Option[];
  label: string;
  placeholder: string;
  onChange: (selectedOption: MultiValue<Option>) => void;
}> = ({ options, label, placeholder, onChange }) => {
  return (
    <div className={classNames(styles.dropdownContainer)}>
      <p className={classNames(styles.dropdownLabel)}>{label}</p>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        isMulti
      />
    </div>
  );
};

export default Dropdown;
