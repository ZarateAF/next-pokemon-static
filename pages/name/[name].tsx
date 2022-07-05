import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Grid, Card, Container, Button, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorite } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorite, setIsInFavorite] = useState(
    localFavorite.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorite.toggleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);
    if (!isInFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container gap={2} css={{ marginTop: "5px" }}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onPress={onToggleFavorite}
              >
                {isInFavorite ? "En Favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  return {
    paths: data.results.map(({ name }) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
        pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByNamePage;
