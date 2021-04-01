import "./Login.css";
import Logo from "../generic/Logo/Logo";
import Form from "../generic/Form/Form";
import Title from "../generic/Title/Title";
import InputAuth from "../generic/inputs/InputAuth/InputAuth";
import Button from "../generic/Button/Button";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login({ onSubmit }) {
  return (
    <main className="login">
      <Form modType="auth" onSubmit={onSubmit}>
        <Logo logo={logo} mix="login__logo" />
        <Title title="Рады видеть!" mix="login__title" />
        <InputAuth
          type="email"
          name="email"
          fieldName="E-mail"
          mix="login__input"
          required={true}
        />
        <InputAuth
          type="password"
          name="password"
          fieldName="Пароль"
          required={true}
          minLength="5"
        />
        <Button type="submit" value="Войти" modType="auth" mix="login__btn" />
        <Link to="/signup" className="login__link">
          Ещё не зарегистрированы?
          <span className="login__link-word">Регистрация</span>
        </Link>
      </Form>
    </main>
  );
}

export default Login;
