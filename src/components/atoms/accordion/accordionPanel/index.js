import React from "react";
import classNames from "classnames";
import style from "./accordionPanel.module.css";

const AccordionPanel = ({ className, children, ...props }) => {
  const componentClassName = classNames(style.accordionPanel, className);
  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};

export default AccordionPanel;
