import React from "react";
import classNames from "classnames";
import style from "./tabPanel.module.css";

const TabPanel = ({ className, children, ...props }) => {
  const componentClassName = classNames(style.tabPanel, className);
  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};

export default TabPanel;
