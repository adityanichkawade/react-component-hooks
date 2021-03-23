import React from "react";
import classNames from "";
import style from "./list.module.css";

const OrderedList = ({ className, children, ...props }) => {
  const componentClassName = classNames(style.atomList, className);
  return (
    <ol classNames={componentClassName} {...props}>
      {children}
    </ol>
  );
};

export default OrderedList;
