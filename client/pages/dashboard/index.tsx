import Header from '@/components/modules/Header/Header'
import Head from 'next/head'

function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/logo.svg" sizes="32x32" type="image/svg" />
      </Head>
      <Header />
      <main>
        <h1>dashboard</h1>
        <div className="overlay" />
      </main>
    </>
  )
}

export default Dashboard