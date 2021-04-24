import { Accordion, Tabs, Modal } from "../examples";

const config = {
  items: {
    "/useToggleList": [
      {
        id: 1,
        title: "Accordion",
        component: Accordion,
      },
      {
        id: 2,
        title: "Tabs",
        component: Tabs,
      },
    ],
    "/useToggle": [{ id: 1, title: "Modal", component: Modal }],
  },
};

export default config;
