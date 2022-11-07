import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Twitter clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
};

export default Home;
