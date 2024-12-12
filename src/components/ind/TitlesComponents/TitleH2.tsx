import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TitleH2 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export const TitleH2 = ({children, ...rest}: TitleH2) => {
    return (
        <h2 
            {...rest}
            tabIndex={0} 
            className={twMerge("font-bold indent-6 text-xl", rest.className)}
        >
            {children}
        </h2>
    )
}