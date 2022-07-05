import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  const { id, name, sprites } = data;

  return {
    id,
    name,
    sprites: {
      front_default: sprites.front_default,
      back_default: sprites.back_default,
      front_shiny: sprites.front_shiny,
      back_shiny: sprites.back_shiny,
      other: {
        dream_world: {
          front_default: sprites?.other?.dream_world?.front_default,
        },
      },
    },
  };
}
