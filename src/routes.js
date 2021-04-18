import { Switch, Route, Redirect } from "react-router-dom";

const Routes = ({ items }) => (
  <Switch>
    {items.map((item) =>
      item.redirectTo ? (
        <Route exact id={item.id} path={item.path}>
          <Redirect to={item.redirectTo} />
        </Route>
      ) : (
        <Route exact key={item.id} path={item.path}>
          {item.component}
        </Route>
      )
    )}
  </Switch>
);

export default Routes;
