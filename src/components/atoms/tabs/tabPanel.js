import React from "react";
import classNames from "classnames";

const TabPanel = ({ className, children, ...props }) => {
  const componentClassName = classNames("hks_tabPanel", className);
  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};

export default TabPanel;
