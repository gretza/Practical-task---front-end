import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../services/loginUser";
import Heading from "../Heading/Heading";
import styles from "./LoginForm.module.css";
import Button from "../Button/Button";
import PageContainer from "../PageContainer/PageContainer";


const LoginForm = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!error) {
      return;
    }

    const clearError = () => {
      setError((currentError) => (currentError = null));
    };

    setTimeout(clearError, 10 * 1000);
  }, error);

  return (
    <PageContainer>
      <div className={styles.secondContainer}>
        <div className={styles.thirdContainer}>
          <Heading title="LOGiN" />
          <form
            className={styles.form}
            onSubmit={handleSubmit(async (data) => {
              setLoading(true);
              try {
                const res = await loginUser(data);
                console.log(res);
                onLogin(res.token);
                setError(null);
              } catch (err) {
                setError("Email or password is incorrect");
              }
              setLoading(false);
            })}
          >
            {error && <p className={styles.alert}>{error}</p>}
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
            </div>
            {errors.email?.type === "required" && (
              <p role="alert" className={styles.error}>
                Email is required
              </p>
            )}
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
                {...register("password", { required: true })}
              />
            </div>
            {errors.email?.type === "required" && (
              <p role="alert" className={styles.error}>
                Password is required
              </p>
            )}
            <Button label={loading ? "Loading..." : "LOGiN"} type="submit" />
            <Link to="/register" className={styles.button}>
              REGiSTER
            </Link>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default LoginForm;
