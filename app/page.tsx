import Hero from '@/components/custom/Hero'
import CollectionCard from '@/components/custom/CollectionCard'
import { arts, layouts, projects_nstp } from '@/lib/data'

import Link from 'next/link'
import Navbar from '@/components/custom/Navbar'
import ReachOut from '@/components/custom/ReachOut'

import SectionHeader from '@/components/custom/SectionHeader'
import StaggerContainer, { StaggerItem } from '@/components/custom/StaggerContainer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="creative-work" className="container mx-auto px-6 py-24">
        
        {/* Creative Works Section */}
        <section className="mb-48">
          <SectionHeader 
            title="Selected Works" 
            subtitle="Art Direction & Visual Design"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-y-32">
            <StaggerItem>
              <CollectionCard
                href={arts.href}
                title={arts.title}
                description={arts.description}
                collectionData={arts.collectionData[0]}
              />
            </StaggerItem>
            <StaggerItem>
              <div className="md:mt-32">
                <CollectionCard
                  href={layouts.href}
                  title={layouts.title}
                  description={layouts.description}
                  collectionData={layouts.collectionData[0]}
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Projects Section */}
        <section id="featured-projects" className="mb-48">
          <SectionHeader 
            title="Projects" 
            subtitle="Community & Initiatives"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-y-32">
            <StaggerItem>
              <CollectionCard
                href={projects_nstp.href}
                title={projects_nstp.title}
                description={projects_nstp.description}
                collectionData={projects_nstp.collectionData[0]}
              />
            </StaggerItem>
            {/* Placeholder for future projects */}
          </StaggerContainer>
        </section>

        {/* Reach Out Section */}
        <ReachOut />

      </div>
    </>
  )
}
