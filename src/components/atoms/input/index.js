import React from "react";
import classNames from "";
import style from "./input.style.css";

const Input = ({ className, ...props }) => {
  const componentClassName = classNames(style.atomInput, className);
  return <input classNames={componentClassName} {...props} />;
};

export default Input;
