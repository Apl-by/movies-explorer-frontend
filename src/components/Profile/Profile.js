import "./Profile.css";
import Form from "../generic/Form/Form";
import Title from "../generic/Title/Title";
import InputUser from "../generic/inputs/InputUser/InputUser";
import Button from "../generic/Button/Button";
import { useState } from "react";

function Profile({ onClick }) {
  // Для ревью
  const [isEdit, setIsEdit] = useState(false);
  const handleClickOnEdit = () => {
    setIsEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };
  //---------------------------------------------------

  return (
    <main className="profile">
      <Form modType="user" onSubmit={handleSubmit}>
        <Title title="Привет, Александр!" mix="profile__title" />
        <InputUser
          type="text"
          name="user-name"
          fieldName="Имя"
          value="Александр"
        />
        <InputUser
          type="email"
          name="email"
          fieldName="E-mail"
          value="qwety@asdf.by"
        />
        {!isEdit && (
          <>
            <Button
              type="button"
              value="Редактировать"
              modType="edit"
              mix="profile__edit-btn"
              onClick={handleClickOnEdit}
            />
            <Button
              type="button"
              value="Выйти из аккаунта"
              modType="exit"
              onClick={onClick}
            />
          </>
        )}
        {isEdit && (
          <Button
            type="submit"
            value="Сохранить"
            modType="auth"
            mix="profile__submit-btn"
          />
        )}
      </Form>
    </main>
  );
}

export default Profile;
