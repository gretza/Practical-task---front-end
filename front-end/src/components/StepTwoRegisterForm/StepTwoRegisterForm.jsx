import Heading from "../Heading/Heading";
import styles from "./StepTwoRegisterForm.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PageContainer from "../PageContainer/PageContainer";
import Select from "../Select/Select";
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

const StepTwoRegisterForm = () => {
  const [gender, setGender] = useState(null);

  const genderSelectChange = (event) => {
      const select = event.target.value;
      setGender(select);
    };

  return (
    <PageContainer>
      <div className={styles.secondContainer}>
        <div className={styles.thirdContainer}>
          <Heading title="REGiSTER" />
          <form className={styles.form}>
            <Input
              placeholder="First name"
              label="FIRST NAME:"
              type="text"
              id="firstName"
              // changeValue={getEmail}
              required
            />
            <Input
              placeholder="Last name"
              label="LAST NAME:"
              type="text"
              id="lastName"
              // changeValue={getEmail}
              required
            />
            <Input
              placeholder="Address"
              label="ADDRESS:"
              type="text"
              id="address"
              // changeValue={getEmail}
            />
            <Select value={gender} onChange={genderSelectChange}/>
            <Checkbox label="I accept terms and conditions" id="termsAndConditions" required/>
            <Checkbox label="Subscribe news letter" id="termsAndConditions"/>
            <Button label="BACK" />
            <Button label="SUBMIT" />
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default StepTwoRegisterForm;
