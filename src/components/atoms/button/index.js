import React from "react";
import classNames from "classnames";
const Button = ({ className, children, ...props }) => {
  const componentClassName = classNames("btn", className);
  return (
    <button className={componentClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
