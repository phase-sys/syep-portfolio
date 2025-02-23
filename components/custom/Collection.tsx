import ImageCarousel, { ImageMeta } from './ImageCarousel'

export interface CollectionProps {
  title: string
  description: string
  collectionData: ImageMeta[]
}

export default function Collection({
  title,
  description,
  collectionData,
}: CollectionProps) {
  return (
    <div className="mb-8">
      <p className="text-xl">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>

      <ImageCarousel imageMeta={collectionData} />
    </div>
  )
}
