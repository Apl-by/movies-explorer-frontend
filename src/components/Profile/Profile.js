import "./Profile.css";
import Form from "../generic/Form/Form";
import Title from "../generic/Title/Title";
import InputUser from "../generic/inputs/InputUser/InputUser";
import Button from "../generic/Button/Button";

function Profile() {
  return (
    <section className="profile">
      <Form modType="user">
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
        <Button
          type="submit"
          value="Редактировать"
          modType="edit"
          mix="profile__submit-btn"
        />
        <Button type="button" value="Выйти из аккаунта" modType="exit" />
      </Form>
    </section>
  );
}

export default Profile;
