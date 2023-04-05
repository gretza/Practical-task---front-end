import React, { useState } from "react";
import HomePage from "../HomePage/HomePage";
import LoginForm from "../../components/LoginForm/LoginForm";


const LoginPage = () => {
  const [token, setToken] = useState(null);
  return (
    <div>
      {token ? (
        <HomePage token={token} />
      ) : (
        <LoginForm
          onLogin={(token) => {
            setToken(token);
          }}
        />
      )}
    </div>
  );
};

export default LoginPage;
