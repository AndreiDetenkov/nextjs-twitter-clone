import type {NextPage} from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Twitter clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar/>
      </main>

    </div>
  )
}

export default Home
