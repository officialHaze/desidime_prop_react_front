import LoginContainer from "../components/LoginContainer";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import logout from "../lib/Logout";

function Home() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [hideModal, doHideModal] = useState(true);
  const handleMouseDown = (type: string) => {
    if (type === "login") {
      setModalType("login");
    } else if (type === "signup") {
      setModalType("signup");
    }
    doHideModal(false);
  };

  //logout user
  useEffect(() => {
    logout()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <LoginContainer handleMouseDown={handleMouseDown} />
      {!hideModal && (
        <Modal
          type={modalType}
          hideModal={doHideModal}
          setModalType={setModalType}
        />
      )}
    </>
  );
}

export default Home;
