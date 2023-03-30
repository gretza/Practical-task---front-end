import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button key={props.label} onClick={props.onClick} className={styles.button}>
      {props.label}
    </button>
  );
};

export default Button;
