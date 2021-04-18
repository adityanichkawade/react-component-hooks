import React from "react";
import classNames from "classnames";

const AccordionPanel = ({ className, children, ...props }) => {
  const componentClassName = classNames("accordionPanel", className);
  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};

export default AccordionPanel;
