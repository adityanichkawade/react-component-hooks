import React from "react";
import classNames from "";
import style from "./list.module.css";

const UnorderedList = ({ className, children, ...props }) => {
  const componentClassName = classNames(style.atomList, className);
  return (
    <li classNames={componentClassName} {...props}>
      {children}
    </li>
  );
};

export default UnorderedList;
