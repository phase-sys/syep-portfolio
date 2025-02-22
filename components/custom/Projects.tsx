import ImageCarousel from './ImageCarousel'

export default function Projects() {
  const projectData = [
    { id: 1, src: '/images/projects/diy.jpg', alt: 'Project 1' },
    { id: 2, src: '/images/projects/survival_go_bag.jpg', alt: 'Project 2' },
    { id: 3, src: '/images/projects/urban1.jpg', alt: 'Project 3' },
  ]
  return (
    <div className="mb-8">
      <p className="text-xl">Projects</p>
      <p className="text-sm text-gray-600">
        Here are some of the projects I’ve worked on, showcasing my skills in
        web development, UI/UX design, and software engineering.
      </p>

      <ImageCarousel projectData={projectData} />
    </div>
  )
}
