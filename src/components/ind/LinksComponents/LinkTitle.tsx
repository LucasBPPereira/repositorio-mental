"use client";
import { IconOpenLink } from "justd-icons";
import { AnchorHTMLAttributes, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface LinkTitleProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  linkHref: string;
}

export const LinkTitle = ({ children, linkHref, ...rest }: LinkTitleProps) => {
  const [hover, setHover] = useState(false);

  function handleSetHover() {
    setHover(true);
  }

  function handleSetLeave() {
    setHover(false);
  }

  return (
    <a
      {...rest}
      href={linkHref}
      onMouseOver={handleSetHover}
      onMouseLeave={handleSetLeave}
      className={twMerge("transition-all duration-300 flex items-center")}
    >
      {children}
      <IconOpenLink
        className={`ml-2 transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </a>
  );
};
