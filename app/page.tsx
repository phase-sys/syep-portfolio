import Hero from '@/components/custom/Hero'
import Navbar from '@/components/custom/Navbar'
import Collection from '@/components/custom/Collection'
import { arts, projects_nstp } from '@/lib/data'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="next-section" className="md:pt-24 mx-12 md:mx-36 lg:mx-72">
        <Collection
          title={projects_nstp.title}
          description={projects_nstp.description}
          collectionData={projects_nstp.collectionData}
        />
        <Collection
          title={arts.title}
          description={arts.description}
          collectionData={arts.collectionData}
        />
      </div>
    </>
  )
}
