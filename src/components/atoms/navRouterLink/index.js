import React from "react";
import classNames from "classnames";

const NavRouterLink = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const componentClassName = classNames("navRouterLink", className);
    return (
      <a ref={ref} className={componentClassName} {...props}>
        {children}
      </a>
    );
  }
);

export default NavRouterLink;
