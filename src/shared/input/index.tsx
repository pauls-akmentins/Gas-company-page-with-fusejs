import classNames from "classnames";

import styles from "./styles/Input.module.scss";

import MagnifyingGlass from "../../assets/icons/magnifying-glass.png";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  invalid?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder = "",
  id,
  value,
  invalid,
  onChange,
}) => {
  return (
    <div className={styles.inputContainer}>
      {label ? (
        <label
          className={classNames(styles.inputLabel, {
            [styles.labelInvalid]: !!invalid,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
      <input
        className={classNames(styles.inputField, {
          [styles.inputInvalid]: !!invalid,
        })}
        type={type}
        placeholder={placeholder}
        name={id}
        value={value}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) =>
          (e.target.placeholder = value === "" ? placeholder : value)
        }
        onChange={(e) => onChange(e)}
        autoComplete="off"
        data-testid="inputField"
      />
      <img
        src={MagnifyingGlass}
        alt="Magnifying glass"
        className={classNames(styles.magnifyingGlassIcon)}
      />
      {!!invalid ? (
        <p data-testid="inputInvalidMessage" className={styles.invalidMessage}>
          {invalid}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
