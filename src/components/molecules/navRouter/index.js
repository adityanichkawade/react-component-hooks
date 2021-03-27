import React from "react";
import { Link } from "react-router-dom";
import { NavRouterLink } from "../../atoms";
import classNames from "classnames";
import style from "./navRouter.module.css";

const NavRouter = ({ className, items, children, ...props }) => {
  const componentClassName = classNames(style.navRouterLink, className);
  return (
    <nav className={componentClassName}>
      <ul className={style.navigationRouterList}>
        {items.map(({ id, path, title }) => (
          <li className={style.navigationRouterListItem} key={id}>
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
