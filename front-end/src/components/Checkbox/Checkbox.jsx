import styles from "./Checkbox.module.css";

const Checkbox = ({ label, id, error, changeValue }) => {
  const onCheckboxChange = (event) => {
    changeValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        label={label}
        id={id}
        error={error}
        className={styles.checkbox}
        // onChange={onInputChange}
      />
    </div>
  );
};

export default Checkbox;
