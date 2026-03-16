const testimonials = [
  {
    quote:
      "My child’s confidence and focus have grown so much since starting Jiu-Jitsu at Kaiju. The coaches are patient and truly care about each student.",
    name: "Parent of student",
    role: "Kids Jiu-Jitsu",
  },
  {
    quote:
      "I’ve lost weight, gained strength, and found a community that keeps me accountable and motivated every week.",
    name: "Adult member",
    role: "Fundamentals & Advanced",
  },
  {
    quote:
      "The coaching, drilling, and live rounds here prepared me better than any other gym I’ve trained at.",
    name: "Competition team member",
    role: "Advanced Jiu-Jitsu",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          Real Results On and Off the Mats
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mb-8">
          From kids and parents to hobbyists and competitors, our students see real
          changes in confidence, fitness, and mindset.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name + t.role}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 flex flex-col"
            >
              <div className="text-red-500 mb-3 text-xl">“</div>
              <blockquote className="text-sm text-neutral-200 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold text-neutral-50">{t.name}</div>
                <div className="text-neutral-400 text-xs uppercase tracking-[0.18em]">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
