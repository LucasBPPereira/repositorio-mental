import { HTMLAttributes } from "react";
import { LinkNavHeader } from "../ind/LinksComponents/LInkNavHeader";
import { TitleH1 } from "../ind/TitlesComponents/TitleH1";

type HeaderNavigation = HTMLAttributes<HTMLElement>;

export const HeaderNavigation = ({ ...rest }: HeaderNavigation) => {
  return (
    <header
      {...rest}
      aria-label="Cabeçalho de navegação"
      className="flex justify-around p-5
        bg-stone-900 items-center"
    >
      <TitleH1
        tabIndex={0}
        className="px-4 py-2 rounded-md outline-none ring-offset-2 focus-visible:ring-2 ring-transparent focus-visible:ring-offset-blue-500 focus-visible:bg-blue-500/10"
      >
        Repositório Mental
      </TitleH1>
      <nav className="flex gap-5">
        <LinkNavHeader linkHref="/">Home</LinkNavHeader>
        <LinkNavHeader linkHref="/sobre">Sobre</LinkNavHeader>
        <LinkNavHeader linkHref="/categorias">Categoria</LinkNavHeader>
      </nav>
    </header>
  );
};
