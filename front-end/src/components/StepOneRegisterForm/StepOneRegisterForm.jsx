import Heading from "../Heading/Heading";
import styles from "./StepOneRegisterForm.module.css";
import Button from "../Button/Button";
import PageContainer from "../PageContainer/PageContainer";
import { useForm } from "react-hook-form";
import { useState } from "react";

const StepOneRegisterForm = (props) => {
  const [button, setButton] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <PageContainer>
      <div className={styles.secondContainer}>
        <div className={styles.thirdContainer}>
          <Heading title="REGiSTER" />
          <form
            className={styles.form}
            onSubmit={handleSubmit((formData) => {
              if (errors.email || errors.password || errors.repeatPassword) {
                return;
              }
              props.getData(formData)
              setButton(props.nextStep);
              console.log(formData);
            })}
          >
            <div className={styles.container}>
              <label htmlFor="email" className={styles.label}>
                EMAIL:
              </label>
              <input
                className={styles.input}
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className={styles.error}>
                  Email is required
                </p>
              )}
            </div>
            <div className={styles.container}>
              <label htmlFor="password" className={styles.label}>
                PASSWORD:
              </label>
              <input
                className={styles.input}
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 symbols",
                  },
                  validate: (value) => {
                    return (
                      [/[A-Z]/, /[0-9]/].every((pattern) =>
                        pattern.test(value)
                      ) || "Must include at least 1 Capital letter and 1 number"
                    );
                  },
                })}
              />
            </div>
            {errors.password?.type === "required" && (
              <p role="alert" className={styles.error}>
                Password is required
              </p>
            )}
            {errors.password ? (
              <p className={styles.error}>{errors.password.message}</p>
            ) : null}
            <div className={styles.container}>
              <label htmlFor="repeatPassword" className={styles.label}>
                REPEAT PASSWORD:
              </label>
              <input
                className={styles.input}
                placeholder="Repeat password"
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                {...register("repeatPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "Passwords must match";
                    }
                  },
                })}
              />
            </div>
            {errors.repeatPassword?.type === "required" && (
              <p role="alert" className={styles.error}>
                Repeat password is required
              </p>
            )}
            {errors.repeatPassword ? (
              <p className={styles.error}>{errors.repeatPassword.message}</p>
            ) : null}
            <Button label="NEXT" onClick={button} type="submit" />
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default StepOneRegisterForm;
