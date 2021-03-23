import React from "react";
import classNames from "classnames";
import style from "./accordionButton.style.css";

const AccordionButton = ({ className, isActive, ...props }) => {
  const componentClassName = classNames(
    style.accordionButtonStyle,
    { [style.accordionButtonActive]: isActive },
    className
  );
  return <button classNames={componentClassName} {...props} />;
};

export default AccordionButton;
