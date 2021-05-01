import React from "react";
import classNames from "";

const Input = ({ className, ...props }) => {
  const componentClassName = classNames("hks_input", className);
  return <input classNames={componentClassName} {...props} />;
};

export default Input;
