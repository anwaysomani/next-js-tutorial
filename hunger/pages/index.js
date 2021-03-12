import Head from 'next/head'
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <div className='background-image'>
      <Head>
        <title>La Faim</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navigation>

      </Navigation>

    </div>
  )
}
