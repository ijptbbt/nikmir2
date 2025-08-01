import HyperLink from "../../components/LoginComponents/RegistrationLink/HyperLink";
import Input from "../../components/LoginComponents/LoginInput/Input";
import LoginButton from "../../components/LoginComponents/LoginButton/LoginButton";
import "./LoginPage.css";
export default function LoginPage() {
  return (
    <>
      <div className="login-wrapper">
        <div className="card">
          <div className="components">
            <header>Login</header>
            <div className="reg">
              <Input />
            </div>
            <div className="button"></div>
            <LoginButton />
            <div className="lk">
              <HyperLink />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
