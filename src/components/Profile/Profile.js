import "./Profile.css";
import Form from "../generic/Form/Form";
import Title from "../generic/Title/Title";
import InputUser from "../generic/inputs/InputUser/InputUser";
import Button from "../generic/Button/Button";
import { useState, useEffect, useContext, useRef } from "react";
import useForm from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onSignout, onSubmit, apiError }) {
  const user = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const inputFocus = useRef(null);
  const {
    values: { name = user.name || "", email = user.email || "" },
    errors,
    isValid,
    handleChange,
  } = useForm();

  useEffect(() => {
    setIsEdit(false);
  }, [user]);

  const editProfile = (e) => {
    inputFocus.current.focus();
    setIsEdit(true);
  };

  const handleInputChange = (e) => {
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === user.name && email.trim() === user.email) {
      setIsEdit(false);
      return;
    }
    onSubmit({ name, email });
  };

  return (
    <main className="profile">
      <Form modType="user" onSubmit={handleSubmit}>
        <Title title={`Привет, ${user.name}!`} mix="profile__title" />
        <InputUser
          type="text"
          name="name"
          fieldName="Имя"
          value={name}
          error={errors.name || ""}
          onChange={handleInputChange}
          required={true}
          minLength="2"
          maxLength="30"
          pattern="[A-Za-zА-Яа-яЁё]{1}[A-Za-zА-Яа-яЁё\s-]*"
          readOnly={!isEdit}
          anchor={inputFocus}
        />
        <InputUser
          type="email"
          name="email"
          fieldName="E-mail"
          value={email}
          error={errors.email || ""}
          onChange={handleInputChange}
          required={true}
          readOnly={!isEdit}
        />
        {!isEdit && (
          <>
            <Button
              type="button"
              value="Редактировать"
              modType="edit"
              mix="profile__edit-btn"
              onClick={editProfile}
            />
            <Button
              type="button"
              value="Выйти из аккаунта"
              modType="exit"
              onClick={onSignout}
            />
          </>
        )}
        {isEdit && (
          <div className="profile__save">
            <Button
              type="submit"
              value="Сохранить"
              modType="auth"
              disabled={!isValid}
            />
            <span className="profile__error">{apiError}</span>
          </div>
        )}
      </Form>
    </main>
  );
}

export default Profile;
