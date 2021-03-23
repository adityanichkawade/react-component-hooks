import React from "react";
import classNames from "classnames";
import style from "./accordionButton.style.css";

const AccordionPanel = ({ className, ...props }) => {
  const componentClassName = classNames(style.accordionPanel, className);
  return <div classNames={componentClassName} {...props} />;
};

export default AccordionPanel;
