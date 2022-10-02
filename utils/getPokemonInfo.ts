import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const sprites = {
      back_default: data.sprites.back_default,
      back_shiny: data.sprites.back_shiny,
      front_default: data.sprites.front_default,
      front_shiny: data.sprites.front_shiny,
      other: data.sprites.other,
    };

    return {
      id: data.id,
      name: data.name,
      sprites: sprites,
    };
  } catch (error) {
    return null;
  }

}