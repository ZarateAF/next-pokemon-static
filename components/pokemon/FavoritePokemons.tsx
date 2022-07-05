import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  favoritePokemon: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemon }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemon.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
