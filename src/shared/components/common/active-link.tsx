"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}

const ActiveLink = ({ children, url }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={`text-sm font-semibold uppercase py-5 px-3 hover:text-primary transition-all block ${
        isActive ? "font-semibold !text-primary" : "hover:!text-primary"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
