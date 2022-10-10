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
        <p><img src="/augustus_invictus_law.jpg" alt="construction" className={styles.photo} /></p>
        <p><img src="/augustus_invictus_law.jpg" alt="Attorney Augustus Invictus"/> </p>
      </main>

      <Footer />
    </div>
  )
}
