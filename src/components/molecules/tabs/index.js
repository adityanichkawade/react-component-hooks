import React from "react";
import classNames from "classnames";
import { TabPanel } from "../../atoms";
import TabButtons from "./tabButtons";
import style from "./tabs.module.css";
const Tabs = ({ className, children, items, onTabClick, ...props }) => {
  const componentClassName = classNames(style.tabs, className);
  return (
    <div className={componentClassName}>
      <TabButtons items={items} onTabClick={onTabClick} />
      {items.map(
        (item) =>
          item.isActive && (
            <TabPanel key={item.id} onClick={(e) => onTabClick(e, item)}>
              {item.content}
            </TabPanel>
          )
      )}
    </div>
  );
};

export default Tabs;
