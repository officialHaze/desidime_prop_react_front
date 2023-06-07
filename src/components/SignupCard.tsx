import "./../styles/ModalCard.css";
import OrgIntro from "./OrgIntro";
import GoogleLogIn from "./GoogleLogIn";
import { ChangeEvent, useState } from "react";
import createUser from "../lib/createUser";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<string | null>>;
}

interface SignUpDetails {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default function SignUpCard({ setModalType }: Props) {
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    switch (id) {
      case "username":
        setSignUpDetails((prevState) => {
          return {
            ...prevState,
            username: value,
          };
        });
        break;
      case "email":
        setSignUpDetails((prevState) => {
          return {
            ...prevState,
            email: value,
          };
        });
        break;
      case "password":
        setSignUpDetails((prevState) => {
          return {
            ...prevState,
            password: value,
          };
        });
        break;
      case "passwordConfirm":
        setSignUpDetails((prevState) => {
          return {
            ...prevState,
            confirm_password: value,
          };
        });
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = async () => {
    setSignUpDetails({
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    if (
      signUpDetails.username &&
      signUpDetails.email &&
      signUpDetails.password &&
      signUpDetails.confirm_password
    ) {
      if (signUpDetails.password === signUpDetails.confirm_password) {
        try {
          const res = await createUser({
            username: signUpDetails.username,
            email: signUpDetails.email,
            password: signUpDetails.password,
          });
          console.log(res);
          alert("Successfully signed up");
        } catch (err) {
          console.error(err);
        }
      } else {
        alert("passwords dont match");
      }
    }
  };
  return (
    <div className="modal-card">
      <div className="org-info">
        <div className="org-section-1">
          <OrgIntro />
        </div>
        <div className="org-section-2">
          <div>Already have an account?</div>
          <div
            className="log-in-btn"
            onMouseDown={() => {
              setModalType("login");
            }}
          >
            LOG IN
          </div>
        </div>
      </div>

      <div className="signup-page">
        <div>
          <div className="signup-title">
            <h3>SIGN UP</h3>
          </div>
          <GoogleLogIn />
          <div className="or-tag-signup">OR</div>
          <form className="manual-signup-form">
            <input
              id="username"
              type="text"
              className="signup-input"
              placeholder="Username"
              required
              value={signUpDetails.username}
              onChange={handleChange}
            />
            <input
              id="email"
              type="email"
              className="signup-input"
              placeholder="Email"
              required
              value={signUpDetails.email}
              onChange={handleChange}
            />
            <input
              id="password"
              type="password"
              className="signup-input"
              placeholder="Password"
              required
              value={signUpDetails.password}
              onChange={handleChange}
            />
            <input
              id="passwordConfirm"
              type="password"
              className="signup-input"
              placeholder="Confirm Password"
              required
              value={signUpDetails.confirm_password}
              onChange={handleChange}
            />
            <div className="signup-form-extras">
              <div>
                <input type="checkbox" name="deal alerts" id="deal-alerts" />
                <label htmlFor="deal-alerts">
                  I wish to subscribe to daily deal alerts via email
                </label>
              </div>
            </div>
          </form>
        </div>
        <button onClick={handleFormSubmit} className="signup-btn" type="submit">
          SIGN UP
        </button>
      </div>
    </div>
  );
}
