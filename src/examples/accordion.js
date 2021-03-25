import React from "react";
import { useToggleList } from "../hooks";
import { Accordion as AccordionPresenter } from "../components/molecules";

const items = [
  {
    id: 1,
    title: "Accordion 1",
    isActive: true,
    content: <div>Panel Content</div>,
  },
  {
    id: 2,
    title: "Accordion 2",
    isActive: false,
    content: <div>Panel Content</div>,
  },
  {
    id: 3,
    title: "Accordion 3",
    isActive: false,
    content: <div>Panel Content</div>,
  },
];

const Accordion = () => {
  const { toggleItems, doToggle } = useToggleList(items);
  const onAccordionClick = (e, item) => {
    doToggle({
      findKey: "id",
      findValue: item.id,
      updateKey: "isActive",
      updateValue: !item.isActive,
      defaultValue: false,
    });
  };

  return (
    <AccordionPresenter
      items={toggleItems}
      onAccordionClick={onAccordionClick}
    />
  );
};

export default Accordion;
