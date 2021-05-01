import React from "react";
import classNames from "classnames";
import { ModalHeader, ModalBody, ModalFooter, Button } from "../../atoms";

const Modal = ({ className, children, title, titleClose, onCloseClick }) => {
  const componentClassName = classNames("hks_modal", className);
  return (
    <section
      onClick={(e) => e.target === e.currentTarget && onCloseClick(e)}
      className={componentClassName}
    >
      <div className="hks_modalContent">
        <ModalHeader title={title} onCloseClick={onCloseClick} />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onCloseClick} className="hks_btn">
            {titleClose}
          </Button>
        </ModalFooter>
      </div>
    </section>
  );
};

export default Modal;
