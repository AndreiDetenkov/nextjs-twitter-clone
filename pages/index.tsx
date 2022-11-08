import type { GetServerSideProps } from "next";
import Head from "next/head";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";
import { Tweet } from "./api/fetchTweets";

interface HomeProps {
  tweets: Tweet[];
}

const Home = ({ tweets }: HomeProps) => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweetList={tweets} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchTweets`
  );
  const { tweets } = await response.json();

  return {
    props: { tweets },
  };
};
