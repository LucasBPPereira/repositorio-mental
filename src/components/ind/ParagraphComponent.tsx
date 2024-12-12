import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
}

export const Paragraph = ({ children, ...rest}: ParagraphProps) => {
    return (
        <p
            {...rest}
            className={twMerge("my-1 text-left text-stone-100 font-light rounded-md outline-none ring-offset-2 focus-visible:ring-2 ring-transparent focus-visible:ring-offset-blue-500 focus-visible:bg-blue-500/10", rest.className)}
        >
            {children}
        </p>
    )
}