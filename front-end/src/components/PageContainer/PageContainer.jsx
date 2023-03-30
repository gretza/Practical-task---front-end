import styles from "./PageContainer.module.css";

const PageContaner = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>{props.children}</div>
      </div>
    </>
  );
};

export default PageContaner;
