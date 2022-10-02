import { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

interface Props {
  PokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ PokemonId }) => {
  const router = useRouter();

  const onFavoritesClicked = () => {
    router.push(`/pokemon/${PokemonId}`);
  };

  return (
    <Grid key={PokemonId} xs={6} sm={4} md={2} xl={2}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={onFavoritesClicked}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${PokemonId}.svg`}
          width={"100%"}
          height={"140px"}
        />
      </Card>
    </Grid>
  );
};
