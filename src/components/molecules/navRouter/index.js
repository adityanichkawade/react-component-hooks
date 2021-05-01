import React from "react";
import { NavRouterLink } from "../../atoms";

const NavRouter = ({ className, items }) => {
  return (
    <nav className={className}>
      <ul className="hks_navigationRouterList">
        {items.map(({ id, path, title }) => (
          <li className="hks_navigationRouterListItem" key={id}>
            <NavRouterLink to={path}>{title}</NavRouterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavRouter;
