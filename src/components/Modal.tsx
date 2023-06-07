import "./../styles/Modal.css";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignupCard";
import { RxCross2 } from "react-icons/rx";

interface Props {
  type: string | null;
  hideModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Modal({ type, hideModal, setModalType }: Props) {
  return (
    <main className="modal-main">
      {type === "login" && <LoginCard setModalType={setModalType} />}
      {type === "signup" && <SignUpCard setModalType={setModalType} />}
      <div className="close-logo-wrapper">
        <RxCross2
          className="close-logo"
          onClick={() => {
            hideModal(true);
          }}
        />
      </div>
    </main>
  );
}
