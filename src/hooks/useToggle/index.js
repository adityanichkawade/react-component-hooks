import { useState } from "react";
function useToggle({ toggleOn }) {
  const [isToggleOn, setToggle] = useState(toggleOn);

  const doToggle = () => setToggle(!isToggleOn);

  return { isToggleOn, doToggle };
}

export default useToggle;
