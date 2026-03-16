import Nav from "@/components/Nav";

export default function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      <Nav />
      <main className="flex-1">
        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-3">
              Schedule
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Class Schedule
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl">
              A detailed schedule will be added here. For now, please contact us or
              submit the Get Started form and we&apos;ll share current class times and
              recommend the best options for you or your child.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
