import React from "react";
import classNames from "classnames";

const Checkbox = ({ className, id, title, ...props }) => {
  const componentClassName = classNames(className);
  return (
    <>
      <input
        className={componentClassName}
        id={id}
        type="checkbox"
        {...props}
      />
      <label htmlFor={id}>{title}</label>
    </>
  );
};

export default Checkbox;
