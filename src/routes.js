import { Switch, Route } from "react-router-dom";

const Routes = ({ items }) => (
  <Switch>
    {items.map((item) => (
      <Route key={item.id} path={item.path}>
        {item.component}
      </Route>
    ))}
  </Switch>
);

export default Routes;
