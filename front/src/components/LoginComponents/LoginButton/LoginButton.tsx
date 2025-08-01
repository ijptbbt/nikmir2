import { useNavigate } from "react-router-dom";
import "./LoginButton.css";
export default function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/main");
  };
  return (
    <>
      <div className="wrapper">
        <button onClick={handleLogin} className="btn">
          Login
        </button>
      </div>
    </>
  );
}
