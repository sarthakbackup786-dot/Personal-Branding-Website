import Nav from './components/Nav'
import Hero from './components/Hero'
import Figures from './components/Figures'
import Strengths from './components/Strengths'
import Engagements from './components/Engagements'
import Career from './components/Career'
import Leadership from './components/Leadership'
import Mba from './components/Mba'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-sheet text-ink px-4 py-2 text-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Figures />
        <Strengths />
        <Engagements />
        <Career />
        <Leadership />
        <Mba />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
