import React from "react";
import classNames from "classnames";
import { AccordionButton, AccordionPanel } from "../../atoms/accordion";
import style from "./accordion.style.css";

const Accordion = ({ className, onAccordionClick, items, ...props }) => {
  const componentClassName = classNames(style.accordion, className);
  return (
    <div className={componentClassName} {...props}>
      {items.map((item) => (
        <>
          <AccordionButton
            onClick={(e) => onAccordionClick(e, item)}
            isActive={item.isActive}
          >
            {item.title}
          </AccordionButton>
          {item.isActive && <AccordionPanel>{item.component}</AccordionPanel>}
        </>
      ))}
    </div>
  );
};

export default Accordion;
