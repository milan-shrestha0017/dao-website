import Head from 'next/head'

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>ForeFront Homepage</title>
        <meta name="description" content="Forefront Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </div>
  )
}
