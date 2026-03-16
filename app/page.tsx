import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyKaiju from "@/components/WhyKaiju";
import ClassesGrid from "@/components/ClassesGrid";
import HowToStart from "@/components/HowToStart";
import Testimonials from "@/components/Testimonials";
import InstructorSpotlight from "@/components/InstructorSpotlight";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhyKaiju />
        <ClassesGrid />
        <HowToStart />
        <Testimonials />
        <InstructorSpotlight />
      </main>
      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <span>© {new Date().getFullYear()} Kaiju Jiu-Jitsu. All rights reserved.</span>
          <span>Jiu-Jitsu in Middleburg, FL</span>
        </div>
      </footer>
    </div>
  );
}
