import { MyButton } from "../components/UI/button/MyButton"
import { MyInput } from "../components/UI/input/MyInput"
import "../styles/Login.scss";

export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page__title">Log in please</div>

      <form className="login-page__form">
        <MyInput type="text" placeholder="Enter username" />

        <MyInput type="text" placeholder="Enter password" />

        <div className="login-page__form-button">
          <MyButton>LOG IN</MyButton>
        </div>
      </form>
    </div>
  )
}
