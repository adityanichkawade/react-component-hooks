import { ComponentList } from "../components/organisms";

const config = [
  {
    id: 1,
    path: "/",
    redirectTo: "/useToggleList",
  },
  {
    id: 2,
    title: "useToggleList",
    path: "/useToggleList",
    component: ComponentList,
  },
  {
    id: 3,
    title: "useToggle",
    path: "/useToggle",
    component: ComponentList,
  },
];

export default config;
