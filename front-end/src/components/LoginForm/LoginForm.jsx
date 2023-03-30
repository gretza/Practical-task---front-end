import Heading from "../Heading/Heading";
import styles from "./LoginForm.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PageContainer from "../PageContainer/PageContainer";

const FormContainer = (props) => {
  return (
    <PageContainer>
      <div className={styles.secondContainer}>
        <div className={styles.thirdContainer}>
          <Heading title="LOGiN" />
          <form className={styles.form}>
            <Input
              placeholder="Email"
              label="EMAIL:"
              type="email"
              id="email"
              // changeValue={getEmail}
              required
            />
            <Input
              placeholder="Password"
              label="PASSWORD:"
              type="password"
              id="Ppassword"
              // changeValue={getEmail}
              required
            />
            <Button label="LOGiN" />
            <Button label="REGiSTER" />
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default FormContainer;
