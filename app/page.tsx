import Hero from '@/components/custom/Hero'
import CollectionCard from '@/components/custom/CollectionCard'
import { arts, layouts, projects_nstp } from '@/lib/data'
import NavbarCustom from '@/components/custom/NavbarCustom'
import Footer from '@/components/custom/Footer'

export default function Home() {
  return (
    <>
      <NavbarCustom />
      <Hero />
      <div id="next-section" className="pt-12 mx-12 md:mx-36 lg:mx-48 xl:mx-72">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          <CollectionCard
            href={arts.href}
            title={arts.title}
            description={arts.description}
            collectionData={arts.collectionData[0]}
          />
          <CollectionCard
            href={layouts.href}
            title={layouts.title}
            description={layouts.description}
            collectionData={layouts.collectionData[0]}
          />
          <CollectionCard
            href={projects_nstp.href}
            title={projects_nstp.title}
            description={projects_nstp.description}
            collectionData={projects_nstp.collectionData[0]}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
