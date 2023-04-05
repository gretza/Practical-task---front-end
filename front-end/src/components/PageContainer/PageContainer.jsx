import styles from "./PageContainer.module.css";

const PageContainer = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>{props.children}</div>
      </div>
    </>
  );
};

export default PageContainer;
