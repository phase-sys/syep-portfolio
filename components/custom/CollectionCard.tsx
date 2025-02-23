import Image from 'next/image'
import Link from 'next/link'
import { ICollection, ImageMeta } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface CollectionProps extends Omit<ICollection, 'collectionData'> {
  collectionData: ImageMeta
}

export default function CollectionCard({
  href,
  title,
  description,
  collectionData,
}: CollectionProps) {
  return (
    <Link href={href}>
      <Card className="flex items-center mb-8 cursor-pointer hover:shadow-xl rounded-2xl">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl shadow-lg">
              <Image
                src={collectionData.src}
                alt={collectionData.alt}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-display font-black">
                {title}
              </p>
              <Separator className="my-1" />
              <p className="text-xs md:text-sm text-gray-600 font-display">
                {description.length > 100
                  ? `${description.slice(0, 100)}...`
                  : description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
