import Footer from '@/components/custom/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-[100vh]">
      <div className="mx-12 md:mx-36 lg:mx-48 xl:mx-72">{children}</div>
      <Footer />
    </div>
  )
}
