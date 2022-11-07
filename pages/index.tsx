import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
