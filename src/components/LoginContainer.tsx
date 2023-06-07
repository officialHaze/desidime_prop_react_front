import "./../styles/LoginContainer.css";

interface Props {
  handleMouseDown: (type: string) => void;
}

export default function LoginContainer({ handleMouseDown }: Props) {
  return (
    <main className="login-container-main">
      <div className="login-wrapper">
        <div
          id="login"
          onMouseDown={() => {
            handleMouseDown("login");
          }}
        >
          <h2>Login</h2>
        </div>
        <div
          id="signup"
          onMouseDown={() => {
            handleMouseDown("signup");
          }}
        >
          <h2>Signup</h2>
        </div>
      </div>
    </main>
  );
}
