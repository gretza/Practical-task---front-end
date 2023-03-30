import StepWizard from "react-step-wizard";
import StepOneRegisterForm from "../../components/StepOneRegisterForm/StepOneRegisterForm";
import StepTwoRegisterForm from "../../components/StepTwoRegisterForm/StepTwoRegisterForm";

const RegisterPage = () => {
  console.log({StepWizard})
  return (
    <StepWizard>
      <StepOneRegisterForm initialStep={1}/>
      <StepTwoRegisterForm initialStep={2}/>
    </StepWizard>
  );
};

export default RegisterPage;
