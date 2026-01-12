import Link from 'next/link'

export default function ReachOut() {
  return (
    <section id="reach-out" className="mb-24 mt-24">
      <div className="w-full h-px bg-border mb-24" />
      
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground tracking-tight leading-tight">
          Let's create something<br/> <span className="text-muted-foreground italic">timeless</span>.
        </h2>
        
         <Link
          href={'/files/resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-b border-foreground pb-1 text-sm font-sans tracking-widest uppercase hover:text-primary hover:border-primary transition-colors"
        >
          View Resume
        </Link>

         <div className="flex flex-wrap justify-center gap-12 mt-12">
           <Link href="mailto:chefeceline@gmail.com" className="text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              Email
           </Link>
           <Link href="https://linkedin.com" target="_blank" className="text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
           </Link>
           <Link href="https://instagram.com" target="_blank" className="text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              Instagram
           </Link>
         </div>

         <p className="text-[10px] text-muted-foreground/40 font-sans tracking-widest mt-24 uppercase">
           &copy; {new Date().getFullYear()} Syepselin. All rights reserved.
         </p>
      </div>
    </section>
  )
}
