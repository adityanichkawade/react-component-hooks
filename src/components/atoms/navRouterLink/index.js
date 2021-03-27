import React from "react";
import classNames from "classnames";
import style from "./navRouterLink.module.css";

const NavRouterLink = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const componentClassName = classNames(style.navRouterLink, className);
    return (
      <a ref={ref} className={componentClassName} {...props}>
        {children}
      </a>
    );
  }
);

export default NavRouterLink;
