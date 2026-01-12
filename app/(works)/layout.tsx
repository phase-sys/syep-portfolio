import ReachOut from '@/components/custom/ReachOut'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1">
        {children}
      </div>
      <div className="container mx-auto px-6">
        <ReachOut />
      </div>
    </div>
  )
}
