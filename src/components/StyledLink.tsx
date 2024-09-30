import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface StyledLinkProps extends Omit<LinkProps, "to"> {
  to: string;
  external?: boolean;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  children,
  to,
  external,
  ...props
}) => {
  const className =
    "font-medium text-zinc-900 dark:text-zinc-100 border-b border-zinc-900 dark:border-zinc-100 hover:border-transparent transition-colors duration-300";

  if (external) {
    return (
      <a className={className} href={to} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  );
};

export default StyledLink;
