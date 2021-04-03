import "./Login.css";
import Logo from "../generic/Logo/Logo";
import Form from "../generic/Form/Form";
import Title from "../generic/Title/Title";
import InputAuth from "../generic/inputs/InputAuth/InputAuth";
import Button from "../generic/Button/Button";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useForm from "../../hooks/useForm";

function Login({ onSubmit }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm();

  return (
    <main className="login">
      <Form modType="auth" onSubmit={onSubmit} noValidate={true}>
        <Logo logo={logo} mix="login__logo" />
        <Title title="Рады видеть!" mix="login__title" />
        <InputAuth
          type="email"
          name="email"
          value={values.email || ""}
          error={errors.email || ""}
          onChange={handleChange}
          fieldName="E-mail"
          mix="login__input"
          required={true}
        />
        <InputAuth
          type="password"
          name="password"
          value={values.password || ""}
          error={errors.password || ""}
          onChange={handleChange}
          fieldName="Пароль"
          required={true}
          minLength="5"
        />
        <Button
          type="submit"
          value="Войти"
          modType="auth"
          mix="login__btn"
          disabled={!isValid}
        />
        <Link to="/signup" className="login__link">
          Ещё не зарегистрированы?
          <span className="login__link-word">Регистрация</span>
        </Link>
      </Form>
    </main>
  );
}

export default Login;
