import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import styles from "./StepTwoRegisterForm.module.css";
import Button from "../Button/Button";
import PageContainer from "../PageContainer/PageContainer";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/registerUser";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";

const StepTwoRegisterForm = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!error) {
      return;
    };

    const clearError = () => {
      setError((currentError) => currentError = null)
    };

    setTimeout(clearError, 10 * 1000);
  }, error);

  return (
    <PageContainer>
      <div className={styles.secondContainer}>
        <div className={styles.thirdContainer}>
          <Heading title="REGiSTER" />
          <form
            className={styles.form}
            onSubmit={handleSubmit(async (formData) => {
              try {
                setLoading(true);
                await registerUser({
                  email: props.giveData.email,
                  password: props.giveData.password,
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  address: formData.address,
                  gender: formData.gender,
                  termsAndConditions: formData.termsAndConditions,
                  newsletter: formData.newsletter,
                });
                setError(null);
              }
               catch (err) {
                setError("User already exist");
                return;
               }
              props.getData(null);
              console.log(props.giveData);
              navigate(routes.loginPage)
            })}
          >
            {error && <p className={styles.alert}>{error}</p>}
            <div className={styles.container}>
              <label htmlFor="firstName" className={styles.label}>
                FIRST NAME:
              </label>
              <input
                className={styles.input}
                placeholder="First name"
                type="text"
                id="firstName"
                name="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName?.type === "required" && (
                <p role="alert" className={styles.error}>
                  First name is required
                </p>
              )}
            </div>
            <div className={styles.container}>
              <label htmlFor="lastName" className={styles.label}>
                LAST NAME:
              </label>
              <input
                className={styles.input}
                placeholder="Last name"
                type="text"
                id="lastName"
                name="lastName"
                {...register("lastName", { required: true })}
              />
            </div>
            {errors.lastName?.type === "required" && (
              <p role="alert" className={styles.error}>
                Last name is required
              </p>
            )}
            <div className={styles.container}>
              <label htmlFor="address" className={styles.label}>
                ADDRESS:
              </label>
              <input
                className={styles.input}
                placeholder="Address"
                type="text"
                id="address"
                name="address"
                {...register("address")}
              />
            </div>
            <div className={styles.container}>
              <label className={styles.label}>GENDER:</label>
              <select
                className={styles.select}
                placeholder="select"
                name="gender"
                {...register("gender")}
              >
                <option className={styles.selection}>Select...</option>
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
              </select>
            </div>
            <div className={styles.checkboxContainer}>
              <label htmlFor="termsAndConditions">
                I accept terms and conditions
              </label>
              <input
                type="checkbox"
                id="termsAndConditions"
                name="termsAndConditions"
                {...register("termsAndConditions", { required: true })}
              />
            </div>
            {errors.termsAndConditions?.type === "required" && (
              <p role="alert" className={styles.error}>
                You must agree with terms and conditions
              </p>
            )}
            <div className={styles.checkboxContainer}>
              <label htmlFor="newsletter">Subscribe news letter</label>
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                {...register("newsletter")}
              />
            </div>
            <Button label="BACK" onClick={props.previousStep}/>
            <Button label={loading ? "Loading..." : "SUBMIT"} type="submit" />
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default StepTwoRegisterForm;
