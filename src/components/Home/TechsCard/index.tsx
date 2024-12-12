import cn from "@/utils/cn";
import Link from "next/link";
import { cloneElement, ReactElement } from "react";

interface TechCardProps {
    nameLink: string;
    description: string;
    iconTech: ReactElement;
    colorTech: string;
}

export const TechCard = ({ description, iconTech, nameLink, colorTech}: TechCardProps) => {
  return (
    <div
      aria-label="Tecnologia Node.JS"
      className={cn(`relative max-w-80 h-28 border-2 border-stone-700 rounded-3xl bg-stone-900 focus-within:border-${colorTech}-600 transition-colors duration-300`)}
    >
        {cloneElement(iconTech, {className: cn(`absolute top-2 left-2 text-${colorTech}-600 p-2 bg-stone-800 rounded-full w-8 h-8`)},)}
      {/* <NodeJSIcon className={cn(`absolute top-2 left-2 text-${colorTech}-600 p-2 bg-stone-800 rounded-full w-8 h-8`)} /> */}
      <h3 className="absolute top-3 left-14">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          className={cn(`px-1 text-${colorTech}-800`)}
        >
          {nameLink}
        </Link>
      </h3>
      <p className="absolute top-12 left-2 pr-1 text-sm text-stone-300">
        {description}
      </p>
    </div>
  );
};
