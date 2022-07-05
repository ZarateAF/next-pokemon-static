import { FC, ReactNode } from "react"
import Head from "next/head"
import { Navbar } from '../ui/Navbar';

interface Props {
    children: ReactNode;
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>
                {title || 'PokemonApp'}
            </title>
            <meta name="author" content="FD"/>
            <meta name="description" content={`Información sobre el pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre el pokemon ${title}`}/>
            <meta property="og:description"  content={`Esta es una breve descripción sobre ${title}`}/>
            <meta property="og:image" content={`${origin}/imgs/banner.png`} />
        </Head>
        
        <Navbar />

        <main style={{
            padding: '0rem 1.5rem'
        }}>
            {children}
        </main>
    </>
  )
}
