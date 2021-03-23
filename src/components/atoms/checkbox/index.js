import React from "react";
import classNames from "classnames";

const Checkbox = ({ className, checked, onChange, id, title, ...props }) => {
  const componentClassNames = classNames(className);
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{title}</label>
    </>
  );
};

export default Checkbox;
