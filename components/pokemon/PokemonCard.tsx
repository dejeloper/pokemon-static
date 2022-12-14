import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  const router = useRouter();

  const onclick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid key={id} xs={6} sm={4} md={2} xl={2}>
      <Card
        isHoverable
        isPressable
        variant="bordered"
        css={{ mw: "400px" }}
        onPress={onclick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} alt={name} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
