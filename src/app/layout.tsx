import type { Metadata } from 'next'
import './globals.css'
import Navbar from './navbar'
import { GeistSans } from 'geist/font/sans';
import Head from 'next/head';

/*
<meta property="og:title" content="Pneumologie Erlangen & Höchstadt" />
<meta property="og:type" content="website" />
<meta property="og:description" content="Lungenfachärztliche Praxis für Lungen- bzw. Atemwegserkrankungen, schlafbezogene Atmungsstörungen und Allergologie in Erlangen und Höchstadt." />
<meta property="og:image" content="https://pneumologie-erlangen.de/tcard.png" />
*/
export const metadata: Metadata = {
  title: 'Pneumologie Erlangen & Höchstadt',
  description: 'Lungenfachärztliche Praxis für Lungen- bzw. Atemwegserkrankungen, schlafbezogene Atmungsstörungen und Allergologie in Erlangen und Höchstadt.',
  openGraph: {
    title: 'Pneumologie Erlangen & Höchstadt',
    description: 'Lungenfachärztliche Praxis für Lungen- bzw. Atemwegserkrankungen, schlafbezogene Atmungsstörungen und Allergologie in Erlangen und Höchstadt.',
    type: 'website',
    url: 'https://pneumologie-erlangen.de',
    images: 'https://pneumologie-erlangen.de/tcard.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <body className={GeistSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
