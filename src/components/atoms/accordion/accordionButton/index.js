import React from "react";
import classNames from "classnames";
import style from "./accordionButton.module.css";

const AccordionButton = ({ className, children, isActive, ...props }) => {
  const componentClassName = classNames(
    style.accordionButton,
    { [style.accordionButtonActive]: isActive },
    className
  );
  return (
    <button className={componentClassName} {...props}>
      {children}
    </button>
  );
};

export default AccordionButton;
