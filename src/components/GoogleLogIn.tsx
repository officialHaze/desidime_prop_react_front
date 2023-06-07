import "./../styles/ModalCard.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function GoogleLogIn() {
  return (
    <div className="google-login-container">
      <div className="google-logo">
        <FcGoogle />
      </div>
      <div>
        <Link
          className="google-login-link"
          to={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}
        >
          Continue With Google
        </Link>
      </div>
    </div>
  );
}

export default GoogleLogIn;
