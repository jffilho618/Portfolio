import { useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Sticky from './components/Sticky'
import ScrollProgress from './components/ScrollProgress'
import { WidthProvider } from './context/useWidth/WidthContext'
import Background from '/background.jpg'
import { ToastContainer } from 'react-toastify'


export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <ScrollProgress />
      <div className={`bg-[#070B1C] min-h-screen px-4 py-10 relative 
      sm:px-6 sm:py-12           
      md:px-20 md:py-16           
      lg:px-30 lg:py-20            
      2xl:px-80`}>

      {/* Fundos (mantidos iguais) */}
      <div className='absolute inset-0 bg-[#070B1C] z-0'></div>
      <div
        className='absolute inset-0 z-10'
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.05
        }}
      ></div>

      {/* Container principal - Adicionei gap para mobile */}
      <div className='relative z-20 grid gap-6
        md:gap-8
        lg:gap-10'>
        <WidthProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover={false}
            theme='colored'
            rtl={false}
            draggable
          />
          <Sticky />
          <Header />
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </WidthProvider>
      </div>
    </div>
    </>
  )
}