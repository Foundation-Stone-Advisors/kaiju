import ClassesGrid from "@/components/ClassesGrid";
import Nav from "@/components/Nav";

export default function ClassesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      <Nav />
      <main className="flex-1">
        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
              Jiu-Jitsu &amp; Boxing Classes
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl">
              Explore our programs for kids, adults, women, beginners, and experienced
              practitioners. Each class is designed to help you build skills, confidence,
              and fitness in a supportive environment.
            </p>
          </div>
        </section>
        <ClassesGrid />
      </main>
    </div>
  );
}
