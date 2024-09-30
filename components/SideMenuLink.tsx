"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SideMenuLinkProps extends LinkProps {
  children: ReactNode;
}

const SideMenuLink = (props: SideMenuLinkProps) => {
  const { href, children, ...rest } = props;
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      {...rest}
      href={href}
      className={`side-menu-link ${
        pathname === href ? "active-side-menu-link" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default SideMenuLink;
