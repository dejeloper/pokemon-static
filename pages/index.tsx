import type { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons">
      <h1>Hola Mundo</h1>
      <Button color="gradient" onClick={() => alert("Clic!")}>
        Dale click!!!
      </Button>
    </Layout>
  );
};

export default HomePage;
