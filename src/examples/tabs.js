import React from "react";
import { useToggleList } from "../hooks";
import { Tabs as TabsPresenter } from "../components/molecules";

const items = [
  {
    id: 1,
    title: "Tab 1",
    isActive: true,
    content: <div>Tab Content 1</div>,
  },
  {
    id: 2,
    title: "Tab 2",
    isActive: false,
    content: <div>Tab Content 2</div>,
  },
  {
    id: 3,
    title: "Tab 3",
    isActive: false,
    content: <div>Tab Content 3</div>,
  },
];

const Tabs = () => {
  const { toggleItems, doToggle } = useToggleList(items);
  const onTabClick = (e, item) => {
    doToggle({
      findKey: "id",
      findValue: item.id,
      updateKey: "isActive",
      updateValue: true,
      defaultValue: false,
    });
  };

  return <TabsPresenter items={toggleItems} onTabClick={onTabClick} />;
};

export default Tabs;
