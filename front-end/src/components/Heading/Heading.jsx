import styles from "./Heading.module.css";

const Heading = (props) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.buttonsContainer}>{props.children}</div>
    </nav>
  );
};

export default Heading;
