import React from "react";
import { useToggle } from "../../hooks";
import { Modal as ModalPresenter } from "../molecules";
import { Button } from "../atoms";

const Modal = () => {
  const { isToggleOn, doToggle } = useToggle(false);
  const onModalCloseClick = (e, item) => {
    doToggle();
  };
  const onButtonClick = () => {
    doToggle();
  };

  return (
    <>
      <Button onClick={onButtonClick}>Show Modal</Button>
      {isToggleOn && (
        <ModalPresenter
          title="Modal"
          titleClose="Ok"
          onCloseClick={onModalCloseClick}
        />
      )}
    </>
  );
};

export default Modal;
