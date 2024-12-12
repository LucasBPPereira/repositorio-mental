import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkNavHeaderProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  linkHref: string;
}

export const LinkNavHeader = ({ children, linkHref, ...rest }: LinkNavHeaderProps) => {
  return (
    <>
      <Link
        {...rest}
        className={twMerge("px-4 py-2 rounded-lg hover:text-blue-500 transition-colors duration-300 hover:underline hover:underline-offset-4 outline-none ring-offset-2 focus-visible:ring-2 ring-transparent focus-visible:ring-offset-blue-500 focus-visible:bg-blue-500/20", rest.className)}
        href={linkHref}
      >
        {children}
      </Link>
    </>
  );
};
