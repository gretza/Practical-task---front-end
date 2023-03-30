import styles from "./Select.module.css";

const Select = ({onChange}) => {
  return (
    <div className={styles.container}>
    <label className={styles.label}>GENDER:</label>
    <select
    className={styles.select}
      name="gender"
      onChange={onChange}
    >
      <option value="male">MALE</option>
      <option value="female">FEMALE</option>
    </select>
    </div>
  );
};

export default Select;
