import React from "react";
import { useToggles } from "../hooks";
import { Accordion } from "../components/molecules";

const items = [
  {
    id: 1,
    isActive: true,
    content: <h1>Panel Content</h1>,
  },
  {
    id: 2,
    isActive: false,
    content: <h1>Panel Content</h1>,
  },
  {
    id: 3,
    isActive: false,
    content: <h1>Panel Content</h1>,
  },
];

const AccordionExample = () => {
  const { toggleItems, doToggle } = useToggles(items);
  const onAccordionClick = (e, item) => {
    doToggle({
      findKey: "id",
      findValue: item.id,
      updateKey: "isActive",
      updateValue: true,
      defaultValue: false,
    });
  };

  return <Accordion items={toggleItems} onAccordionClick={onAccordionClick} />;
};

export default AccordionExample;
