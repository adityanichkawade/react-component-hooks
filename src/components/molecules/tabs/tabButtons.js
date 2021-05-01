import React from "react";
import classNames from "classnames";
import { TabButton } from "../../atoms";
const TabButtons = ({ className, children, items, onTabClick, ...props }) => {
  const componentClassName = classNames("hks_tabButtons", className);
  return (
    <div className={componentClassName}>
      {items.map((item) => (
        <TabButton
          key={item.id}
          isActive={item.isActive}
          onClick={(e) => onTabClick(e, item)}
        >
          {item.title}
        </TabButton>
      ))}
    </div>
  );
};

export default TabButtons;
