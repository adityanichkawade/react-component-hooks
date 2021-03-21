import React from "react";

const Checkbox = ({ title, checked, onChange, id }) => (
  <>
    <input id={id} type="checkbox" checked={checked} onChange={onChange} />
    <label htmlFor={id}>{title}</label>
  </>
);

export default Checkbox;
