import type { Metadata } from 'next'
import './globals.css'
import Navbar from './navbar'
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'Pneumologie Erlangen & Höchstadt',
  description: 'Description TODO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={GeistSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
