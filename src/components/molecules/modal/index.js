import React from "react";
import classNames from "classnames";

const Modal = ({
  className,
  children,
  show,
  title,
  titleClose,
  onCloseClick,
}) => {
  const componentClassName = classNames("modal", className);
  return (
    <section
      onClick={(e) => e.target === e.currentTarget && onCloseClick(e)}
      className={componentClassName}
    >
      <div className="modalContent">
        <div className="modalHeader">
          <span onClick={onCloseClick} className="modalIconClose">
            &times;
          </span>
          <h1>{title}</h1>
        </div>
        <div className="modalBody">{children}</div>
        <div className="modalFooter">
          <button onClick={onCloseClick} className="btn">
            {titleClose}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
