import Heading from "../Heading/Heading";
import styles from "./LoginForm.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PageContainer from "../PageContainer/PageContainer";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

const FormContainer = (props) => {
  const { register, handleSubmit } = useForm();
  return (
    <PageContainer>
      <div className={styles.secondContainer}>
        <div className={styles.thirdContainer}>
          <Heading title="LOGiN" />
          <form
            className={styles.form}
            onSubmit={handleSubmit((formData) => {
              console.log(formData);
            })}
          >
            <Input
              placeholder="Email"
              label="EMAIL:"
              type="email"
              id="email"
              // changeValue={getEmail}
              required
              {...register("email")}
            />
            <Input
              placeholder="Password"
              label="PASSWORD:"
              type="password"
              id="password"
              // changeValue={getEmail}
              required
              {...register("password")}
            />
            <Button label="LOGiN" type="submit" />
            <Link to="/register" className={styles.button}>REGiSTER</Link>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default FormContainer;
