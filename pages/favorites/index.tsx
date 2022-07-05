import { useState, useEffect } from "react";
import { Card, Grid } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorite } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorite.pokemon);
  }, []);

  return (
    <Layout title="Pokemons favoritos">
      {favoritePokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemon={favoritePokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
