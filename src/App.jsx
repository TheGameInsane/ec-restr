import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { useColorMode } from './components/ui/color-mode'

function App() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <Hero />
      <div
        style={{
          backgroundImage: "url('/images/bgstars.png')",
          backgroundSize: "300px",
          backgroundAttachment: 'fixed'
        }}>
        <div className={`backdrop-blur-md ${colorMode == 'light' ? 'bg-light/70' : 'bg-dark/70'}`}>
          <Features />
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
