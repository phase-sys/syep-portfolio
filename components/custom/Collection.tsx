import { ICollection } from '@/lib/data'
import ImageCarousel from '@/components/custom/ImageCarousel'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

type CollectionProps = {
  collection: ICollection
}

export default function Collection({ collection }: CollectionProps) {
  const crumbs = collection.href.split('/').filter(Boolean)
  const breadcrumbs = [
    <Link key="home" href="/" className="text-blue-500 hover:underline">
      home
    </Link>,
    ...crumbs.map((crumb, idx) => {
      const href = '/' + crumbs.slice(0, idx + 1).join('/')
      const isLast = idx === crumbs.length - 1

      return (
        <span key={href}>
          {' / '}
          {isLast ? (
            <span className="text-gray-500">{crumb}</span> // Non-clickable
          ) : (
            <Link href={href} className="text-blue-500 hover:underline">
              {crumb}
            </Link>
          )}
        </span>
      )
    }),
  ]

  return (
    <div className="h-[100vh]">
      <div className="pt-8 pb-24">
        <div className="text-sm">{breadcrumbs}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ImageCarousel imageMeta={collection.collectionData} />
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-decorative text-4xl">{collection.title}</h1>
            <Separator className="my-2 w-1/2" />
            <p className="font-display">{collection.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
