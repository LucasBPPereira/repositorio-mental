import { HTMLAttributes, ReactNode } from "react";

interface SectionComponentProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  nameSection: string;
}

export const SectionComponent = ({
  children,
  nameSection,
  ...rest
}: SectionComponentProps) => {
  return (
    <section
      {...rest}
      aria-describedby={nameSection}
      className="w-full max-w-[850px] min-w-72 px-4 py-2 flex flex-col gap-5 bg-stone-950 rounded-md border-stone-900 border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      {children}
    </section>
  );
};
