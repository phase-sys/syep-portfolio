import Hero from '@/components/custom/Hero'
import Navbar from '@/components/custom/Navbar'
import Projects from '@/components/custom/Projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="next-section" className="md:pt-24 mx-12 md:mx-36 lg:mx-72">
        <Projects />
      </div>
    </>
  )
}
