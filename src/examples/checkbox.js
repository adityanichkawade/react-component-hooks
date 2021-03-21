import React from "react";
import { Checkbox as CheckboxPresenter } from "../components";
import { useToggle } from "../hooks";

const Checkbox = () => {
  const { isToggle, doToggle } = useToggle(false);
  const checkboxValue = isToggle ? "on" : "off";

  return (
    <CheckboxPresenter
      title="Checkbox"
      onChange={() => doToggle()}
      checked={isToggle}
      value={checkboxValue}
    />
  );
};

export default Checkbox;
