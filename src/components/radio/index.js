import React from "react";

const Radio = ({ title, checked, onChange, id }) => (
  <>
    <input id={id} type="radio" checked={checked} onChange={onChange} />
    <label for={id}>{title}</label>
  </>
);

export default Radio;
