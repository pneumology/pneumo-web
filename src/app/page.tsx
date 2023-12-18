import FAQ from './faq'
import Footer from './footer'
import Hero from './hero'
import Intro from './intro'
import Location from './location'
import Services from './services'
import Team from './team'

export default function Home() {
  return (
    <main>
      <div className="p-5 flex justify-center w-full pt-20">
        <div className="w-full max-w-7xl">
          <Hero />
          <Intro />
        </div>
      </div>
      <Location />
      <Team />
      <Services />
      <FAQ />

      <Footer />
    </main>
  )
}
