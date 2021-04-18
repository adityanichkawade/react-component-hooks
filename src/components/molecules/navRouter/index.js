import React from "react";
import { Link } from "react-router-dom";
import { NavRouterLink } from "../../atoms";
import classNames from "classnames";

const NavRouter = ({ className, items, children, ...props }) => {
  const componentClassName = classNames("navRouterLink", className);
  return (
    <nav className={componentClassName}>
      <ul className="navigationRouterList">
        {items.map(({ id, path, title }) => (
          <li className="navigationRouterListItem" key={id}>
            <Link component={NavRouterLink} to={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavRouter;
