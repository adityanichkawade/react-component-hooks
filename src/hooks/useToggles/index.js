import { useReducer } from "react";

const reducer = (state, action) => {
  const { find, update } = action;
  const [findKey, findValue] = Object.entries(find)[0];
  const [updateKey, updateValue] = Object.entries(update)[0];

  return state.map((item) =>
    item[findKey] === findValue ? { ...item, [updateKey]: updateValue } : item
  );
};

function useToggles(aItems) {
  const [toggleItems, dispatch] = useReducer(reducer, aItems);
  const doToggles = (find, update) => dispatch({ find, update });

  return { toggleItems, doToggles };
}

export default useToggles;
