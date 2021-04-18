import { UseToggleListSection } from "./components/organisms";

const routesConfig = [
  {
    id: 1,
    path: "/",
    redirectTo: "/useToggleList",
  },
  {
    id: 2,
    title: "useToggleList",
    path: "/useToggleList",
    component: UseToggleListSection,
  },
];

export default routesConfig;
