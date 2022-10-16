import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Invictus Law Firm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Invictus Law Firm, P.A." />
        <p><img src="/augustus_invictus_law.jpg" alt="Girl in a jacket" width="200" height="auto"/></p>
        <p>424 East Central Blvd. Suite #731</p>
        <p>Orlando, Florida 32801</p>
        <p>Email: InvictusPA@protonmail.com</p>
        <p>Phone: 407.900.2848</p>
        </main>

      <Footer />
    </div>
  )
}
