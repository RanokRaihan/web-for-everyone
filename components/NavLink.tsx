"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
}

const NavLink = (props: NavLinkProps) => {
  const { href, children, ...rest } = props;
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      {...rest}
      href={href}
      className={`nav-link ${pathname === href ? "active-nav-link" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
