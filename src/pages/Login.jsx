import { useContext } from "react";
import { AuthorizedContext } from "../context";
import { MyButton } from "../components/UI/button/MyButton"
import { MyInput } from "../components/UI/input/MyInput"
import "../styles/Login.scss";

export const Login = () => {
  const { setIsAuthorized } = useContext(AuthorizedContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuthorized(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div className="login-page">
      <div className="login-page__title">Log in please</div>

      <form onSubmit={login} className="login-page__form">
        <MyInput type="text" placeholder="Enter username" />

        <MyInput type="text" placeholder="Enter password" />

        <div className="login-page__form-button">
          <MyButton>LOG IN</MyButton>
        </div>
      </form>
    </div>
  )
}
