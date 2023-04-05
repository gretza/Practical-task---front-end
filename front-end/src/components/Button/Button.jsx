import styles from "./Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <button key={label} onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
