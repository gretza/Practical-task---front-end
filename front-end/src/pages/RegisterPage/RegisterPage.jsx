import StepOneRegisterForm from "../../components/StepOneRegisterForm/StepOneRegisterForm";
import StepTwoRegisterForm from "../../components/StepTwoRegisterForm/StepTwoRegisterForm";
import StepWizard from "react-step-wizard";
import { useState } from "react";

const RegisterPage = () => {
  const [userContactData, setUserContactData] = useState(null);

  return (
    <StepWizard>
      <StepOneRegisterForm getData={(data) => setUserContactData(data)} />
      <StepTwoRegisterForm
        giveData={userContactData}
        getData={(data) => setUserContactData(data)}
      />
    </StepWizard>
  );
};

export default RegisterPage;
