import React from "react";
import { StyledForm } from "../styled/StyledForm";
import { useForm } from "../../Hooks/useForm"
import { StyledButton } from "../styled/StyledButton";

const loginData = {
  email: "",
  password: "",
};

const LoginForm = ({ mode }) => {
  const [values, handleChange, handleSubmit] = useForm(loginData, mode, null);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="email">
          EMAIL
          <input
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" autoComplete={values.password.toString()}>
          PASSWORD
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <StyledButton type="submit">LOGIN</StyledButton>
      </StyledForm>
    </div>
  );
};

export default LoginForm;
