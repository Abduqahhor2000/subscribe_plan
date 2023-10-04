import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import { Header, Hero, Row } from "src/components";
import { AuthContext } from "src/context/auth.context";
import { IMovie } from "src/interfaces/app.interface";
import { API_REQUEST } from "src/services/api.service";

export default function Home({
  trending,
  topRated,
  tvTopRated,
  popular,
  documentary,
}: HomeProps): JSX.Element {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) return <>{null}</>;

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Home - Abdu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg :space-y-24 lg:pl-16">
        <Hero trending={trending} />
        <Row title="Top Rated" movies={topRated} />
        <Row title="TV Shou" movies={tvTopRated} isBig={true} />
        <Row title="Documentary" movies={popular.reverse()} />
        <Row title="Popular" movies={popular} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const trending = await fetch(API_REQUEST.trending).then((res) => res.json());
  const topRated = await fetch(API_REQUEST.top_rated).then((res) => res.json());
  const tvTopRated = await fetch(API_REQUEST.tv_top_rated).then((res) =>
    res.json()
  );
  const popular = await fetch(API_REQUEST.popular).then((res) => res.json());
  const documentary = await fetch(API_REQUEST.documentary).then((res) =>
    res.json()
  );

  return {
    props: {
      trending: trending.results,
      topRated: topRated.results,
      tvTopRated: tvTopRated.results,
      popular: popular.results,
      documentary: documentary.results,
    },
  };
};

interface HomeProps {
  trending: IMovie[];
  topRated: IMovie[];
  tvTopRated: IMovie[];
  popular: IMovie[];
  documentary: IMovie[];
}
