import "./Register.css";
import Logo from "../generic/Logo/Logo";
import Form from "../generic/Form/Form";
import Title from "../generic/Title/Title";
import InputAuth from "../generic/inputs/InputAuth/InputAuth";
import Button from "../generic/Button/Button";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <main className="register">
      <Form modType="auth">
        <Logo logo={logo} mix="register__logo" />
        <Title title="Добро пожаловать!" mix="register__title" />
        <InputAuth
          type="text"
          name="user-name"
          fieldName="Имя"
          mix="register__input"
          required={true}
          min="2"
          max="30"
        />
        <InputAuth
          type="email"
          name="email"
          fieldName="E-mail"
          mix="register__input"
          required={true}
        />
        <InputAuth
          type="password"
          name="password"
          fieldName="Пароль"
          required={true}
          min="5"
        />
        <Button
          type="submit"
          value="Зарегистрироваться"
          modType="auth"
          mix="register__btn"
        />
        <Link to="/signin" className="register__link">
          Уже зарегистрированы?
          <span className="register__link-word">Войти</span>
        </Link>
      </Form>
    </main>
  );
}

export default Register;
