import { FC } from "react";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="Dejeloper" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokémon, pokedex`} />
      </Head>
      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
