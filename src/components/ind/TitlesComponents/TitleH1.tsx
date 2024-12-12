import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TitleH1 extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const TitleH1 = ({ children, ...rest }: TitleH1) => {
  return (
    <h1 {...rest} tabIndex={0} className={twMerge("font-bold", rest.className)}>
      {children}
    </h1>
  );
};
