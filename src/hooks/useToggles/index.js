import { useReducer } from "react";

const reducer = (state, action) => {
  const { findKey, findValue, updateKey, updateValue, defaultValue } = action;

  return state.map((item) =>
    item[findKey] === findValue
      ? { ...item, [updateKey]: updateValue }
      : { ...item, [updateKey]: defaultValue }
  );
};

function useToggles(aItems) {
  const [toggleItems, dispatch] = useReducer(reducer, aItems);
  const doToggle = (config) => dispatch(config);

  return { toggleItems, doToggle };
}

export default useToggles;
