import React from "react";
import "./Authorization.scss";
import classNames from "classnames";

const Authorization = props => {
  const {ChangeLogin,ChangePassword,logIn } = props;
  return (
    <div className={classNames("authorization")}>
      <form>
        <label>Введите имя пользователя и пароль</label>
        <input onChange={ChangeLogin} placeholder={"Имя"} />
        <input
          onChange={ChangePassword}
          placeholder={"Пароль"}
        />
        <button onClick={logIn}>Вход</button>
      </form>
    </div>
  );
};
export default Authorization