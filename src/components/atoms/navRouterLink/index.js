import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const NavRouterLink = ({ className, children, to }) => {
  const componentClassName = classNames("navRouterLink", className);
  return (
    <div className={componentClassName}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default NavRouterLink;
