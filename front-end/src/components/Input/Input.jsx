import styles from "./Input.module.css";

const Input = ({ placeholder, type, label, id, error, changeValue }) => {
  const onInputChange = (event) => {
    changeValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        label={label}
        id={id}
        name={id}
        error={error}
        // onChange={onInputChange}
      />
    </div>
  );
};

export default Input;
