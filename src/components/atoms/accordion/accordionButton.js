import React from "react";
import classNames from "classnames";

const AccordionButton = ({ className, children, isActive, ...props }) => {
  const componentClassName = classNames(
    "hks_accordionButton",
    { accordionButtonActive: isActive },
    className
  );
  return (
    <button className={componentClassName} {...props}>
      {children}
    </button>
  );
};

export default AccordionButton;
