import "./../styles/ModalCard.css";
import OrgIntro from "./OrgIntro";
import GoogleLogIn from "./GoogleLogIn";
import { ChangeEvent, useState } from "react";
import userLogin from "../lib/userLogin";
import { Link } from "react-router-dom";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<string | null>>;
}

interface LoginDetails {
  username: string;
  password: string;
}

export default function LoginCard({ setModalType }: Props) {
  const [toDashboard, setToDashboard] = useState(false);
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    switch (id) {
      case "username":
        setLoginDetails((prevState) => {
          return {
            ...prevState,
            username: value,
          };
        });
        break;
      case "password":
        setLoginDetails((prevState) => {
          return {
            ...prevState,
            password: value,
          };
        });
        break;

      default:
        break;
    }
  };

  const handleLogin = async () => {
    setLoginDetails({
      username: "",
      password: "",
    });
    try {
      const res = await userLogin(loginDetails.username, loginDetails.password);
      console.log(res);
      setToDashboard(true);
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };
  return (
    <div className="modal-card">
      <div className="org-info">
        <div className="org-section-1">
          <OrgIntro />
        </div>
        <div className="org-section-2">
          <div>New on DesiDime?</div>
          <div
            className="sign-up-btn"
            onMouseDown={() => {
              setModalType("signup");
            }}
          >
            SIGN UP NOW
          </div>
        </div>
      </div>

      {!toDashboard ? (
        <div className="login-page">
          <div>
            <div className="login-title">
              <h3>LOG IN</h3>
            </div>
            <GoogleLogIn />
            <div className="or-tag">OR</div>
            <form className="manual-login-form">
              <input
                id="username"
                type="text"
                className="login-input"
                placeholder="Username or Email"
                required
                value={loginDetails.username}
                onChange={handleChange}
              />
              <input
                id="password"
                type="password"
                className="login-input"
                placeholder="Password"
                required
                value={loginDetails.password}
                onChange={handleChange}
              />
              <div className="login-form-extras">
                <div>
                  <input type="checkbox" name="Remember me" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <div>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
            </form>
          </div>
          <button onClick={handleLogin} className="login-btn" type="submit">
            LOG IN
          </button>
        </div>
      ) : (
        <div className="login-page">
          <Link to="/dashboard">To Dashboard</Link>
        </div>
      )}
    </div>
  );
}
