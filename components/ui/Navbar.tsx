import NextLink from "next/link";
import { Link, useTheme, Text, Spacer, Image } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0rem 1.5rem",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h1>
            P
          </Text>
          <Text color="white" h2>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
